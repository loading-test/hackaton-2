import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ languageName, languageLevel, color }) => {
  const Parentdiv = {
    height: "30px",
    width: "500px",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: 20
  };

  const Childdiv = {
    display: "flex",
    height: "100%",
    width: `${languageLevel}%`,
    borderRadius: 40,
    textAlign: "right"
  };

  const ChilddivClassName = `${"bg-" + color}`;

  const progresstext = {
    marginTop: "auto",
    marginBottom: "auto",
    display: "flex",
    textIndent: 10,
    color: "black",
    fontWeight: 900
  };

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h2
              className={"text-" + color}
              style={{
                lineHeight: "30px",
                marginRight: "10px"
              }}
            >
              {languageName}
            </h2>
          </td>
          <td>
            <div style={Parentdiv}>
              <div style={Childdiv} className={ChilddivClassName}>
                <div style={progresstext}>{`${languageLevel}%`}</div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

ProgressBar.propTypes = {
  color: PropTypes.string.isRequired,
  languageName: PropTypes.string.isRequired,
  languageLevel: PropTypes.string.isRequired
};

export default ProgressBar;
