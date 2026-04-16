export function HeroNetworkVisual() {
  const cx = 240;
  const cy = 240;
  const outerR = 168;

  const inputNodes = [
    { id: "systems", label: "Systems", angle: 270 },
    { id: "teams", label: "Teams", angle: 330 },
    { id: "customers", label: "Customers", angle: 30 },
    { id: "constraints", label: "Constraints", angle: 90 },
    { id: "context", label: "Context", angle: 150 },
    { id: "data", label: "Data", angle: 210 },
  ];

  const outputNodes = [
    { id: "decisions", label: "Decisions", angle: 345 },
    { id: "workflows", label: "Workflows", angle: 75 },
    { id: "outcomes", label: "Outcomes", angle: 195 },
  ];
  const outputR = outerR + 52;

  function toXY(angle: number, r: number) {
    const rad = ((angle - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  const inputPoints = inputNodes.map((n) => ({
    ...n,
    ...toXY(n.angle, outerR),
  }));
  const outputPoints = outputNodes.map((n) => ({
    ...n,
    ...toXY(n.angle, outputR),
  }));

  const lineColors = ["#5DDFF0", "#7C9BFF", "#A882FF", "#5DDFF0", "#7C9BFF", "#5DDFF0"];

  return (
    <div
      className="relative w-full max-w-xl mx-auto select-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 480 480"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5DDFF0" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#5DDFF0" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glowOut" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A882FF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#A882FF" stopOpacity="0" />
          </radialGradient>
          <style>{`
            @keyframes flowIn {
              0%   { stroke-dashoffset: 200; opacity: 0.2; }
              50%  { opacity: 0.9; }
              100% { stroke-dashoffset: 0;   opacity: 0.2; }
            }
            @keyframes flowOut {
              0%   { stroke-dashoffset: 0;    opacity: 0.2; }
              50%  { opacity: 0.8; }
              100% { stroke-dashoffset: -200; opacity: 0.2; }
            }
            @keyframes centerPulse {
              0%, 100% { opacity: 0.6; }
              50%      { opacity: 1; }
            }
            .line-in  { stroke-dasharray: 200; animation: flowIn  3.2s ease-in-out infinite; }
            .line-out { stroke-dasharray: 200; animation: flowOut 3.2s ease-in-out infinite; }
            .center-ring { animation: centerPulse 4s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* Background glow */}
        <circle cx={cx} cy={cy} r="140" fill="url(#glow)" />
        <circle cx={cx} cy={cy} r="80" fill="url(#glowOut)" />

        {/* Lines: input → center */}
        {inputPoints.map((node, i) => (
          <line
            key={`in-${node.id}`}
            x1={node.x}
            y1={node.y}
            x2={cx}
            y2={cy}
            stroke={lineColors[i % lineColors.length]}
            strokeWidth="1.2"
            className="line-in"
            style={{ animationDelay: `${i * 0.45}s` }}
          />
        ))}

        {/* Lines: center → output */}
        {outputPoints.map((node, i) => (
          <line
            key={`out-${node.id}`}
            x1={cx}
            y1={cy}
            x2={node.x}
            y2={node.y}
            stroke="#A882FF"
            strokeWidth="1.6"
            className="line-out"
            style={{ animationDelay: `${i * 0.7 + 1.2}s` }}
          />
        ))}

        {/* Input node dots */}
        {inputPoints.map((node, i) => {
          const labelOffset = node.y < cy ? -14 : 18;
          return (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r="5"
                fill={lineColors[i % lineColors.length]}
                opacity="0.85"
              />
              <text
                x={node.x}
                y={node.y + labelOffset}
                textAnchor="middle"
                fill="#AABFD8"
                fontSize="12"
                fontFamily="Inter, sans-serif"
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {/* Center ring */}
        <circle
          cx={cx}
          cy={cy}
          r="58"
          fill="none"
          stroke="#2E4A70"
          strokeWidth="1.5"
          className="center-ring"
        />
        <circle cx={cx} cy={cy} r="50" fill="#0F1E34" />
        <text
          x={cx}
          y={cy - 6}
          textAnchor="middle"
          fill="#F7FAFD"
          fontSize="18"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="700"
        >
          Alethi
        </text>
        <text
          x={cx}
          y={cy + 12}
          textAnchor="middle"
          fill="#5DDFF0"
          fontSize="9"
          fontFamily="Inter, sans-serif"
          letterSpacing="2.5"
        >
          INTELLIGENCE
        </text>

        {/* Output node dots */}
        {outputPoints.map((node) => {
          const labelOffset = node.y < cy ? -14 : 18;
          return (
            <g key={node.id}>
              <circle cx={node.x} cy={node.y} r="5" fill="#A882FF" opacity="0.9" />
              <text
                x={node.x}
                y={node.y + labelOffset}
                textAnchor="middle"
                fill="#AABFD8"
                fontSize="12"
                fontFamily="Inter, sans-serif"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
