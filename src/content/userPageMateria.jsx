import React, { useEffect, useState } from "react";
import api from "../api";
import PropTypes from "prop-types";
import Preloader from "../utils/preloader";
import RadialProgressBar from "../components/RadialProgressBar";

const UserPageMateria = ({ id }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    api.users.getById(id).then((data) => setUser(data));
  }, []);

  if (user) {
    return (
      <>
        <div className="card mb-3">
          <h3 className="card-header">{user.name}</h3>
          <div className="card-body">
            <h5 className="card-title">{`${user.age} года`}</h5>
            <h6 className="card-subtitle text-muted">{user.aboutMe}</h6>
          </div>
          <div className="card-body">
            <p className="card-text">
              {`Социальная сеть: ${user.socialNetwork}`}
            </p>
          </div>
          <div className="card-body">
            <RadialProgressBar
              color="red"
              languageName="HTML"
              ringFgColour="red"
              languageLevel="42"
            />
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the content.
            </p>
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </>
    );
  } else {
    return <Preloader />;
  }
};
UserPageMateria.propTypes = {
  id: PropTypes.string
};

export default UserPageMateria;
