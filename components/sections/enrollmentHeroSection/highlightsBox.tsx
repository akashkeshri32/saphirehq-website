import BackgroundGradients from "@/components/ui/gradients/bg-gradients";

const HIGHLIGHTS = [
  { number: "250+", text: "Hiring Partners" },
  { number: "99%", text: "Completion Rate" },
  { number: "1000+", text: "Students Trained" },
  { number: "40%", text: "Avg. CTC Hike" },
];

export const HighlightsBox = () => {
  return (
    <div className="bg-white border border-border-stroke rounded-2xl p-7 relative overflow-hidden">
      <div className="grid grid-cols-2 gap-6 text-white relative z-10">
        {HIGHLIGHTS.map((highlight) => (
          <div key={highlight.text} className="flex flex-col gap-1">
            <span className="font-jetbrains text-[24px] font-bold">
              {highlight.number}
            </span>
            <span className="text-13 text-white/80">{highlight.text}</span>
          </div>
        ))}
      </div>

      <BackgroundGradients variant="primary-gradient" />
    </div>
  );
};
