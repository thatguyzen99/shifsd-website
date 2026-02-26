import type { Context, Config } from "@netlify/functions";
import Stripe from "stripe";

export default async (req: Request, context: Context) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const stripeKey = Netlify.env.get("STRIPE_SECRET_KEY");
  if (!stripeKey) {
    return new Response(
      JSON.stringify({ error: "Stripe is not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const stripe = new Stripe(stripeKey);

  try {
    const body = await req.json();
    const { amount, name, email, recurring } = body;

    // Validate amount (minimum $1)
    const donationAmount = Math.round(Number(amount) * 100);
    if (!donationAmount || donationAmount < 100) {
      return new Response(
        JSON.stringify({ error: "Minimum donation is $1.00" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const origin = req.headers.get("origin") || "https://shifsd-liberia.org";

    if (recurring) {
      // Create a recurring subscription via Stripe Checkout
      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        customer_email: email || undefined,
        line_items: [
          {
            price_data: {
              currency: "usd",
              recurring: { interval: "month" },
              product_data: {
                name: "Monthly Donation to SHIFSD Liberia",
                description:
                  "Recurring monthly support for education, agriculture, and livelihoods in Liberia.",
              },
              unit_amount: donationAmount,
            },
            quantity: 1,
          },
        ],
        success_url: `${origin}/get-involved?donation=success&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/get-involved?donation=cancelled`,
        metadata: {
          donor_name: name || "Anonymous",
          donor_email: email || "",
          type: "recurring",
        },
      });

      return new Response(JSON.stringify({ url: session.url }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      // One-time donation via Stripe Checkout
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        customer_email: email || undefined,
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Donation to SHIFSD Liberia",
                description:
                  "One-time support for education, agriculture, and livelihoods in Liberia.",
              },
              unit_amount: donationAmount,
            },
            quantity: 1,
          },
        ],
        success_url: `${origin}/get-involved?donation=success&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/get-involved?donation=cancelled`,
        metadata: {
          donor_name: name || "Anonymous",
          donor_email: email || "",
          type: "one-time",
        },
      });

      return new Response(JSON.stringify({ url: session.url }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Payment failed";
    console.error("Stripe error:", message);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const config: Config = {
  path: "/api/create-checkout",
};
