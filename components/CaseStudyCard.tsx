import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  tag: string;
  year: string;
  summary: string;
  slug: string;
}

export default function CaseStudyCard({ title, tag, year, summary, slug }: CaseStudyCardProps) {
  return (
    <Link
      href={`/cas/${slug}`}
      className="group block border border-[#E5E5E0] p-8 hover:border-[#0A0A0A] transition-colors duration-200"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="font-inter text-xs text-[#6B7280] border border-[#E5E5E0] px-2.5 py-1 rounded-full">
          {tag}
        </span>
        <span className="font-inter text-xs text-[#6B7280]">{year}</span>
      </div>
      <h3 className="font-playfair text-xl font-medium text-foreground mb-3 group-hover:opacity-70 transition-opacity">
        {title}
      </h3>
      <p className="font-inter text-sm text-[#6B7280] leading-relaxed mb-4">
        {summary}
      </p>
      <span className="inline-flex items-center gap-1.5 font-inter text-sm font-medium text-[#1E3A8A] group-hover:gap-2.5 transition-all duration-200">
        Lire l&apos;étude
        <ArrowRight size={14} />
      </span>
    </Link>
  );
}
