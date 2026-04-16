export function FragmentationVisual() {
  const CX = 240, CY = 240, outerR = 160;

  const nodes = [
    { label: "CRM",         angle: 270, color: "#5DDFF0" },
    { label: "Operations",  angle: 330, color: "#7C9BFF" },
    { label: "Market data", angle:  30, color: "#A882FF" },
    { label: "Teams",       angle:  90, color: "#3DD99F" },
    { label: "Reports",     angle: 150, color: "#FFB86B" },
    { label: "Strategy",    angle: 210, color: "#F472B6" },
  ];

  function toXY(angle: number, r: number) {
    const rad = ((angle - 90) * Math.PI) / 180;
    return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
  }

  const points = nodes.map((n) => ({ ...n, ...toXY(n.angle, outerR) }));

  return (
    <div className="relative w-full max-w-lg mx-auto select-none" aria-hidden="true">
      <svg viewBox="0 0 480 480" className="w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="fvGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5DDFF0" stopOpacity="0.1"/>
            <stop offset="100%" stopColor="#5DDFF0" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="fvGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFB86B" stopOpacity="0.1"/>
            <stop offset="100%" stopColor="#FFB86B" stopOpacity="0"/>
          </radialGradient>
          <style>{`
            @keyframes fvPulse { 0%,100%{opacity:0.5} 50%{opacity:1} }
            .fv-center-ring { animation: fvPulse 4s ease-in-out infinite; }
            @keyframes fvQ { 0%,100%{opacity:0.4} 50%{opacity:1} }
            .fv-q { animation: fvQ 2.4s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* Background glows */}
        <circle cx={CX} cy={CY} r="140" fill="url(#fvGlow)"/>
        <circle cx={CX} cy={CY} r="80"  fill="url(#fvGlow2)"/>

        {/* Broken spokes — dashed lines that stop before center */}
        {points.map((n) => {
          const inner = toXY(n.angle, 65);
          return (
            <line key={`spoke-${n.label}`}
              x1={n.x} y1={n.y}
              x2={inner.x} y2={inner.y}
              stroke={n.color}
              strokeWidth="1.2"
              strokeDasharray="5 5"
              opacity="0.45"
            />
          );
        })}

        {/* Node dots + labels */}
        {points.map((n) => {
          const labelOffset = n.y < CY ? -14 : 18;
          return (
            <g key={n.label}>
              <circle cx={n.x} cy={n.y} r="5" fill={n.color} opacity="0.9"/>
              <text x={n.x} y={n.y + labelOffset}
                textAnchor="middle"
                fill="#AABFD8"
                fontSize="13"
                fontFamily="Inter, sans-serif">
                {n.label}
              </text>
            </g>
          );
        })}

        {/* Center: empty ring with ? */}
        <circle cx={CX} cy={CY} r="58"
          fill="none" stroke="#2E4A70" strokeWidth="1.5"
          className="fv-center-ring"/>
        <circle cx={CX} cy={CY} r="50" fill="#0F1E34"/>
        <text x={CX} y={CY + 18}
          textAnchor="middle"
          fill="#FFB86B"
          fontSize="44"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="700"
          className="fv-q">
          ?
        </text>
      </svg>
    </div>
  );
}
