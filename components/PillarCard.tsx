import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PillarCardProps {
  title: string;
  text: string;
  linkLabel: string;
  linkHref: string;
}

export default function PillarCard({ title, text, linkLabel, linkHref }: PillarCardProps) {
  return (
    <div className="border border-[#E5E5E0] p-8 flex flex-col gap-4 hover:border-[#0A0A0A] transition-colors duration-200">
      <h3 className="font-playfair text-xl font-medium text-foreground">
        {title}
      </h3>
      <p className="font-inter text-sm text-[#6B7280] leading-relaxed flex-1">
        {text}
      </p>
      <Link
        href={linkHref}
        className="inline-flex items-center gap-1.5 font-inter text-sm font-medium text-[#1E3A8A] hover:gap-2.5 transition-all duration-200"
      >
        {linkLabel}
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}
