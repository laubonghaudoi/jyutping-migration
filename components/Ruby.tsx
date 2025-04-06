import type React from "react";

interface RubyProps {
  text: string; // Base text
  annotation: string; // Ruby annotation (e.g., pronunciation)
}

const Ruby: React.FC<RubyProps> = ({ text, annotation }) => {
  return (
    <ruby className="inline-ruby">
      {" "}
      {/* Added a class for potential styling */}
      {text}
      <rt>{annotation}</rt>
    </ruby>
  );
};

export default Ruby;
