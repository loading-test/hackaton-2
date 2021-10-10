import React, { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";
import Preloader from "../utils/preloader";

const SkillssPage = (skills) => {
  const [, setSkills] = useState();

  useEffect(() => {
    setSkills(skills);
  }, []);

  let arr = Object.values(skills)

  if (skills) {
    return (
      <div>
        {console.log("arr: ", arr)}
        {arr[0].map((skill) => (
          <ProgressBar
            key={skill.id}
            languageName={skill.name}
            languageLevel={skill.languageLevel}
            color={skill.color}
          />
        ))}
      </div>
    );
  } else {
    return <Preloader />;
  }
};

export default SkillssPage;

/* <ProgressBar
        languageName={skills.html.name}
        languageLevel="42"
        color={skills.html.color}
      />
      <ProgressBar
        languageName={skills.css.name}
        languageLevel="42"
        color={skills.css.color}
      />
      <ProgressBar
        languageName={skills.bootstrap.name}
        languageLevel="42"
        color={skills.bootstrap.color}
      />
      <ProgressBar
        languageName={skills.javaScript.name}
        languageLevel="42"
        color={skills.javaScript.color}
      />
      <ProgressBar
        languageName={skills.materialUi.name}
        languageLevel="42"
        color={skills.materialUi.color}
      />
      <ProgressBar
        languageName={skills.react.name}
        languageLevel="42"
        color={skills.react.color}
      /> */
