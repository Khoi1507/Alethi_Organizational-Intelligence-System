export function TransformationFlow() {
  // Specific real-world business inputs customers immediately recognise
  const inputs = [
    { label: "Market shift",        color: "#5DDFF0" },
    { label: "Revenue gap",         color: "#7C9BFF" },
    { label: "Team misalignment",   color: "#A882FF" },
    { label: "Strategy unclear",    color: "#3DD99F" },
    { label: "Competing priorities",color: "#FFB86B" },
  ];

  // Specific tangible outcomes
  const outputs = [
    { label: "Next best move",    color: "#5DDFF0" },
    { label: "Ranked priorities", color: "#7C9BFF" },
    { label: "Action plan",       color: "#A882FF" },
    { label: "What to stop",      color: "#3DD99F" },
  ];

  const CX = 440, CY = 230;
  const inputX = 110, outputX = 770;

  // Evenly space inputs and outputs vertically
  function inputY(i: number)  { return 80 + i * 76; }
  function outputY(i: number) { return 117 + i * 76; }

  return (
    <div className="relative w-full max-w-5xl mx-auto select-none mb-10" aria-hidden="true">
      <svg viewBox="0 0 880 460" className="w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="tfGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5DDFF0" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="#5DDFF0" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="tfGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A882FF" stopOpacity="0.08"/>
            <stop offset="100%" stopColor="#A882FF" stopOpacity="0"/>
          </radialGradient>
          <style>{`
            @keyframes tfIn {
              0%   { stroke-dashoffset: 260; opacity: 0.15; }
              50%  { opacity: 0.85; }
              100% { stroke-dashoffset: 0;    opacity: 0.15; }
            }
            @keyframes tfOut {
              0%   { stroke-dashoffset: 0;    opacity: 0.15; }
              50%  { opacity: 0.85; }
              100% { stroke-dashoffset: -260; opacity: 0.15; }
            }
            @keyframes tfRing { 0%,100%{opacity:0.6} 50%{opacity:1} }
            .tf-in   { stroke-dasharray: 260; animation: tfIn  3.2s ease-in-out infinite; }
            .tf-out  { stroke-dasharray: 260; animation: tfOut 3.2s ease-in-out infinite; }
            .tf-ring { animation: tfRing 4s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* Column headers */}
        <text x={inputX} y="30" textAnchor="middle"
          fill="#AABFD8" fontSize="12" fontFamily="Inter, sans-serif"
          letterSpacing="2" opacity="0.7">YOU BRING</text>
        <text x={CX} y="30" textAnchor="middle"
          fill="#5DDFF0" fontSize="12" fontFamily="Inter, sans-serif"
          letterSpacing="2" opacity="0.9">ALETHI</text>
        <text x={outputX} y="30" textAnchor="middle"
          fill="#AABFD8" fontSize="12" fontFamily="Inter, sans-serif"
          letterSpacing="2" opacity="0.7">YOU GET</text>

        {/* Glows behind center */}
        <circle cx={CX} cy={CY} r="160" fill="url(#tfGlow)"/>
        <circle cx={CX} cy={CY} r="90"  fill="url(#tfGlow2)"/>

        {/* Input lines → center */}
        {inputs.map((inp, i) => (
          <line key={`in-${i}`}
            x1={inputX + 8} y1={inputY(i)}
            x2={CX - 52}   y2={CY}
            stroke={inp.color} strokeWidth="1.2"
            className="tf-in"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}

        {/* Output lines ← center */}
        {outputs.map((out, i) => (
          <line key={`out-${i}`}
            x1={CX + 52}    y1={CY}
            x2={outputX - 8} y2={outputY(i)}
            stroke={out.color} strokeWidth="1.2"
            className="tf-out"
            style={{ animationDelay: `${i * 0.5 + 1.0}s` }}
          />
        ))}

        {/* Input nodes */}
        {inputs.map((inp, i) => (
          <g key={`inode-${i}`}>
            <circle cx={inputX} cy={inputY(i)} r="5"
              fill={inp.color} opacity="0.85"/>
            <text x={inputX + 14} y={inputY(i) + 4}
              fill="#DCE8F5" fontSize="14"
              fontFamily="Inter, sans-serif" fontWeight="500">
              {inp.label}
            </text>
          </g>
        ))}

        {/* Center ring — same as hero */}
        <circle cx={CX} cy={CY} r="58"
          fill="none" stroke="#2E4A70" strokeWidth="1.5"
          className="tf-ring"/>
        <circle cx={CX} cy={CY} r="50" fill="#0F1E34"/>
        <text x={CX} y={CY - 8} textAnchor="middle"
          fill="#F7FAFD" fontSize="17"
          fontFamily="Space Grotesk, sans-serif" fontWeight="700">
          Alethi
        </text>
        <text x={CX} y={CY + 9} textAnchor="middle"
          fill="#5DDFF0" fontSize="8"
          fontFamily="Inter, sans-serif" letterSpacing="2">
          SYNTHESISES
        </text>
        <text x={CX} y={CY + 22} textAnchor="middle"
          fill="#5DDFF0" fontSize="8"
          fontFamily="Inter, sans-serif" letterSpacing="2">
          & DECIDES
        </text>

        {/* Output nodes */}
        {outputs.map((out, i) => (
          <g key={`onode-${i}`}>
            <circle cx={outputX} cy={outputY(i)} r="5"
              fill={out.color} opacity="0.9"/>
            <text x={outputX - 14} y={outputY(i) + 4}
              textAnchor="end"
              fill="#DCE8F5" fontSize="14"
              fontFamily="Inter, sans-serif" fontWeight="500">
              {out.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
