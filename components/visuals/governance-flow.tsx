export function GovernanceFlow() {
  const stages = [
    { actor: "Alethi",      action: "Surfaces options",  color: "#7C9BFF", human: false },
    { actor: "You decide",  action: "Review & choose",   color: "#5DDFF0", human: true  },
    { actor: "Alethi",      action: "Compiles actions",  color: "#7C9BFF", human: false },
    { actor: "You approve", action: "Govern execution",  color: "#5DDFF0", human: true  },
    { actor: "Alethi",      action: "Records & learns",  color: "#3DD99F", human: false },
  ];

  const NY = 120; // node y position — vertical centre of SVG
  const xs = [90, 247, 450, 653, 810]; // evenly-spaced x positions

  return (
    <div className="relative w-full max-w-4xl mx-auto select-none mt-8" aria-hidden="true">
      <svg viewBox="0 0 900 240" className="w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="gvGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5DDFF0" stopOpacity="0.08"/>
            <stop offset="100%" stopColor="#5DDFF0" stopOpacity="0"/>
          </radialGradient>
          <style>{`
            @keyframes gvFlow {
              0%   { stroke-dashoffset: 180; opacity: 0.15; }
              50%  { opacity: 0.9; }
              100% { stroke-dashoffset: 0;   opacity: 0.15; }
            }
            .gv-line { stroke-dasharray: 180; animation: gvFlow 3.2s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* Soft background glow */}
        <circle cx="450" cy={NY} r="220" fill="url(#gvGlow)"/>

        {/* Connector lines */}
        {stages.slice(0, -1).map((s, i) => (
          <line key={`line-${i}`}
            x1={xs[i] + (s.human ? 7 : 5) + 2} y1={NY}
            x2={xs[i + 1] - (stages[i + 1].human ? 7 : 5) - 2} y2={NY}
            stroke={s.human ? "#5DDFF0" : "#7C9BFF"}
            strokeWidth="1.2"
            className="gv-line"
            style={{ animationDelay: `${i * 0.55}s` }}
          />
        ))}

        {/* Nodes */}
        {stages.map((s, i) => (
          <g key={i}>
            {/* Human glow halo */}
            {s.human && (
              <circle cx={xs[i]} cy={NY} r="20" fill="rgba(93,223,240,0.10)"/>
            )}

            {/* Dot */}
            <circle
              cx={xs[i]} cy={NY}
              r={s.human ? 8 : 6}
              fill={s.color}
              opacity={s.human ? 1 : 0.85}
            />

            {/* Actor label — above */}
            <text
              x={xs[i]} y={NY - 22}
              textAnchor="middle"
              fill={s.human ? "#F7FAFD" : "#AABFD8"}
              fontSize={s.human ? "13" : "12"}
              fontFamily="Inter, sans-serif"
              fontWeight={s.human ? "700" : "400"}
            >
              {s.actor}
            </text>

            {/* Action label — below */}
            <text
              x={xs[i]} y={NY + 26}
              textAnchor="middle"
              fill={s.human ? "#DCE8F5" : "#7A94B0"}
              fontSize="11"
              fontFamily="Inter, sans-serif"
            >
              {s.action}
            </text>
          </g>
        ))}

        {/* Step numbers */}
        {stages.map((_, i) => (
          <text key={`num-${i}`}
            x={xs[i]} y={NY + 48}
            textAnchor="middle"
            fill="#2E4A70"
            fontSize="10"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
          >
            {`0${i + 1}`}
          </text>
        ))}
      </svg>
    </div>
  );
}
