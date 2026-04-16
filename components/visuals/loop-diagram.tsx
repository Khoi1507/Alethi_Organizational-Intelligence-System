export function LoopDiagram() {
  const steps = [
    { label: "Understand reality",  human: false },
    { label: "Find the problem",    human: false },
    { label: "Generate options",    human: false },
    { label: "Compare trade-offs",  human: false },
    { label: "You decide",          human: true  },
    { label: "Execute change",      human: false },
    { label: "Learn & adapt",       human: false },
  ];

  const CX = 240, CY = 240, R = 168, n = steps.length;

  function pos(i: number) {
    const a = (i / n) * 2 * Math.PI - Math.PI / 2;
    return { x: CX + R * Math.cos(a), y: CY + R * Math.sin(a) };
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto select-none" aria-hidden="true">
      <svg viewBox="0 0 480 480" className="w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="lgGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5DDFF0" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="#5DDFF0" stopOpacity="0"/>
          </radialGradient>
          <style>{`
            @keyframes lgSpin {
              from { transform: rotate(0deg); }
              to   { transform: rotate(360deg); }
            }
            .lg-spin { transform-origin: ${CX}px ${CY}px; animation: lgSpin 7s linear infinite; }
            @keyframes lgCenter { 0%,100%{opacity:0.6} 50%{opacity:1} }
            .lg-ring { animation: lgCenter 4s ease-in-out infinite; }
          `}</style>
        </defs>

        <circle cx={CX} cy={CY} r="140" fill="url(#lgGlow)"/>

        {/* Ring track */}
        <circle cx={CX} cy={CY} r={R}
          fill="none" stroke="rgba(46,74,112,0.5)" strokeWidth="1.2"/>

        {/* Orbiting signal dot */}
        <g className="lg-spin">
          <circle cx={CX} cy={CY - R} r="5" fill="#5DDFF0" opacity="0.95"/>
          <circle cx={CX} cy={CY - R} r="10" fill="rgba(93,223,240,0.15)"/>
        </g>

        {/* Step nodes — dots + labels */}
        {steps.map((step, i) => {
          const p = pos(i);
          const labelOffset = p.y < CY ? -14 : 18;
          return (
            <g key={i}>
              {step.human && (
                <circle cx={p.x} cy={p.y} r="14" fill="rgba(93,223,240,0.12)"/>
              )}
              <circle cx={p.x} cy={p.y}
                r={step.human ? 7 : 5}
                fill={step.human ? "#5DDFF0" : "#7C9BFF"}
                opacity={step.human ? 1 : 0.85}
              />
              <text x={p.x} y={p.y + labelOffset}
                textAnchor="middle"
                fill={step.human ? "#F7FAFD" : "#AABFD8"}
                fontSize={step.human ? "13" : "12"}
                fontFamily="Inter, sans-serif"
                fontWeight={step.human ? "600" : "400"}>
                {step.label}
              </text>
            </g>
          );
        })}

        {/* Center ring — same as hero */}
        <circle cx={CX} cy={CY} r="58"
          fill="none" stroke="#2E4A70" strokeWidth="1.5"
          className="lg-ring"/>
        <circle cx={CX} cy={CY} r="50" fill="#0F1E34"/>
        <text x={CX} y={CY - 6} textAnchor="middle"
          fill="#F7FAFD" fontSize="18"
          fontFamily="Space Grotesk, sans-serif" fontWeight="700">
          Alethi
        </text>
        <text x={CX} y={CY + 11} textAnchor="middle"
          fill="#5DDFF0" fontSize="9"
          fontFamily="Inter, sans-serif" letterSpacing="2.5">
          THE LOOP
        </text>
      </svg>
    </div>
  );
}
