import { SectionShell } from "@/components/ui/section-shell";
import { FragmentationVisual } from "@/components/visuals/fragmentation-visual";

const questions = [
  {
    q: "What should we do next?",
    body: "Leaders face competing signals from every direction but no system that connects them to a clear, ranked set of actions.",
    color: "#5DDFF0",
  },
  {
    q: "Which option is actually better?",
    body: "Without a structured way to compare options, choices default to intuition, politics, or whoever speaks loudest in the room.",
    color: "#7C9BFF",
  },
  {
    q: "Which trade-offs are worth making?",
    body: "Every decision involves trade-offs across growth, margin, speed, and risk — but most teams never make them explicit before acting.",
    color: "#A882FF",
  },
  {
    q: "How should the business run differently?",
    body: "Even when the right call is made, translating it into real operating change across teams and systems rarely happens cleanly.",
    color: "#FFB86B",
  },
];

export function ProblemSection() {
  return (
    <SectionShell id="problem" className="bg-[#0F1E34] section-accent-top">
      {/* Centred headline */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 gradient-text">
          Most leaders can see pieces of the business. Very few can see the whole picture.
        </h2>
        <p className="text-lg text-[#DCE8F5] max-w-xl mx-auto">
          Data is everywhere. The answers aren&apos;t.
        </p>
      </div>

      {/* Side-by-side: cards left, visual right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left — question cards stacked */}
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#AABFD8] mb-1">
            The questions that remain unanswered
          </p>
          {questions.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl p-6 border bg-[#1A2E48] hover:bg-[#203554] transition-all duration-200"
              style={{ borderColor: `${item.color}30` }}
            >
              <h3 className="text-base font-bold mb-2" style={{ color: "#5DDFF0" }}>
                {item.q}
              </h3>
              <p className="text-sm text-[#DCE8F5] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        {/* Right — fragmentation visual */}
        <div className="flex items-center justify-center">
          <FragmentationVisual />
        </div>
      </div>
    </SectionShell>
  );
}
