import React from "react";
import { RadialProgress } from "react-radial-progress-indicator";

const RadialProgressBar = ({
  color="red",
  languageName="HTML",
  ringFgColour="red",
  languageLevel="42"
}) => {
  return (
    <div>
      <h2
        style={{
          color: color,
          float: "left",
          lineHeight: "60px",
          marginRight: "10px"
        }}
      >
        {languageName}
      </h2>
      <RadialProgress
        style={{ float: "right" }}
        backgroundColour="#dff0d8"
        backgroundTransparent
        duration={2000}
        fontRatio={4}
        height={100}
        ringBgColour="#ccc"
        ringFgColour={ringFgColour}
        ringIntermediateColour="#aaa"
        ringThickness={0.05}
        segmented
        showIntermediateProgress={false}
        startStep={1}
        step={languageLevel}
        steps={100}
        text={function text(steps, proportion) {
          var step = Math.floor(steps * proportion);
          return "".concat(step, "/").concat(steps);
        }}
        width={100}
      />
    </div>
  );
};

export default RadialProgressBar;
