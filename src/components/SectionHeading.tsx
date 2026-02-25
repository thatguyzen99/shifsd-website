interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className={`font-[var(--font-heading)] text-3xl sm:text-4xl font-bold ${light ? "text-white" : "text-charcoal"}`}>
        {title}
      </h2>
      <div className={`section-divider mt-4 ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-white/80" : "text-charcoal-light"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
