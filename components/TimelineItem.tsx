interface TimelineItemProps {
  period: string;
  title: string;
  body: string;
  lesson: string;
  isLast?: boolean;
}

export default function TimelineItem({ period, title, body, lesson, isLast = false }: TimelineItemProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      {/* Vertical line */}
      <div className="flex flex-col items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-foreground mt-1.5 shrink-0" />
        {!isLast && (
          <div className="w-px flex-1 bg-[#E5E5E0] mt-2" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-12 flex-1 ${isLast ? "" : ""}`}>
        <p className="font-inter text-xs font-medium text-[#6B7280] uppercase tracking-widest mb-2">
          {period}
        </p>
        <h3 className="font-playfair text-2xl font-medium text-foreground mb-3">
          {title}
        </h3>
        <p className="font-inter text-base text-[#0A0A0A] leading-[1.7] mb-4">
          {body}
        </p>
        <p className="font-inter text-[15px] text-[#6B7280] italic leading-[1.7] border-l-2 border-[#E5E5E0] pl-4">
          {lesson}
        </p>
      </div>
    </div>
  );
}
