import type React from "react";
import Audio from "./Audio"; // Import the Audio component

interface RubyProps {
  text: string; // Base text
  annotation: string; // Ruby annotation (e.g., pronunciation)
  audioId?: string; // Optional audio ID
}

const Ruby: React.FC<RubyProps> = ({ text, annotation, audioId }) => {
  return (
    <ruby className="inline-ruby">
      {" "}
      {/* Added a class for potential styling */}
      {text}
      <rt>
        {annotation} {audioId && <Audio id={audioId} />}{" "}
        {/* Conditionally render Audio */}
      </rt>
    </ruby>
  );
};

export default Ruby;
