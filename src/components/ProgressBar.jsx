import React from "react";

const ProgressBar = ({ color, languageName, bgcolor, languageLevel, height }) => {
  const Parentdiv = {
    height: height,
    float: "right",
    width: "90%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: 20
  };

  const Childdiv = {
    height: "100%",
    width: `${languageLevel}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right"
  };

  const progresstext = {
    padding: 5,
    display:"flex",
    margin: "auto",
    textIndent: 10,
    color: "black",
    fontWeight: 900
  };

  return (
    <div>
      <h2
        style={{
          color: color,
          float: "left",
          lineHeight: "30px",
          marginRight: "10px"
        }}
      >
        {languageName}
      </h2>
      <div style={Parentdiv}>
        <div style={Childdiv}>
          <span style={progresstext}>{`${languageLevel}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
