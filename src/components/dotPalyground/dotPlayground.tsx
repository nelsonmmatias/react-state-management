import { FC, useState } from "react";
import "./dotPlayground.css"; // Import the CSS file

export const DotPlayground: FC = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      className="playground"
      onPointerMove={(e) => {
        position.x = e.clientX;
        position.y = e.clientY;
      }}
    >
      <div
        className="dot"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </div>
  );
};
