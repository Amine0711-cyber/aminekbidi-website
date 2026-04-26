interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="font-playfair text-[32px] md:text-[40px] font-medium leading-tight tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 font-inter text-base md:text-lg text-[#6B7280] leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
