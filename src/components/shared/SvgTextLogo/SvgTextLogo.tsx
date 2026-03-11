import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: string | number;
  letterSpacing?: number;
  fill?: string;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  fontSize = 48,
  fontFamily = 'Arial, sans-serif',
  fontWeight = 'bold',
  letterSpacing = 0,
  fill = 'currentColor',
}) => {
  const svgWidth = text.length * fontSize * 0.6 + 40;
  const svgHeight = fontSize + 40;
  const x = 20;
  const y = fontSize + 20;

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className={className}
      aria-label={`Logo: ${text}`}
    >
      <text
        x={x}
        y={y}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
        fill={fill}
        dominantBaseline="hanging"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
