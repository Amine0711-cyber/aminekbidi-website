interface EntityCardProps {
  title: string;
  tags: string[];
  text: string;
  imagePlaceholder: string;
  dashed?: boolean;
}

export default function EntityCard({ title, tags, text, imagePlaceholder, dashed = false }: EntityCardProps) {
  return (
    <div className={`border ${dashed ? "border-dashed border-[#6B7280]" : "border-[#E5E5E0]"} p-8 md:p-10`}>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="font-playfair text-[28px] font-medium text-foreground">
            {title}
          </h2>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-inter text-xs text-[#6B7280] border border-[#E5E5E0] px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <p className="font-inter text-base text-[#0A0A0A] leading-[1.7]">
          {text}
        </p>
        {!dashed && imagePlaceholder && (
          <div className="bg-neutral-200 aspect-[16/9] flex items-center justify-center text-neutral-500 text-sm font-inter mt-2">
            {imagePlaceholder}
          </div>
        )}
      </div>
    </div>
  );
}
