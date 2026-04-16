import { SectionShell } from "@/components/ui/section-shell";
import { FragmentationVisual } from "@/components/visuals/fragmentation-visual";

const questions = [
  {
    q: "We have more data than ever. Why are decisions still this hard?",
    body: "Information lives across ten tools, three spreadsheets, and everyone's head. By the time you've pieced it together, the moment has passed.",
    color: "#5DDFF0",
  },
  {
    q: "Everyone has an opinion. How do we know which direction is actually right?",
    body: "When options can't be compared on the same terms, the decision goes to whoever speaks loudest. Not whoever's right.",
    color: "#7C9BFF",
  },
  {
    q: "We made the call. Why isn't anything actually changing?",
    body: "The gap between deciding and doing is where most strategies die. Good decisions don't automatically become new ways of working.",
    color: "#A882FF",
  },
  {
    q: "Why do we keep running into the same problems?",
    body: "Without tracking what you decided and what actually happened, there's no way to get sharper. The same issues come back on a different day.",
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
