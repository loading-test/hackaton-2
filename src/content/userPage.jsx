import React, { useEffect, useState } from "react";
import api from "../api";
import PropTypes from "prop-types";
import Preloader from "../utils/preloader";
import SkillPage from "./skillPage";

const UserPage = ({ id }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    api.users.getUserById(id).then((data) => setUser(data));
  }, []);

  if (user) {
    return (
      <div className="card col-sm-8 m-auto">
        <div className="card-body">
          <h1 className="card-title card-header text-center">
            {user.name}
          </h1>
          <h4 className="card-title text-center">{`${user.age} года`}</h4>
          <p className="card-text">{user.aboutMe}</p>
          <p className="card-text">{`Социальная сеть: ${user.socialNetwork}`}</p>
          <p className="card-text">{user.session}</p>
          <SkillPage skills={user.skills} />
        </div>
        {console.log("data-user: ", user)}
      </div>
    );
  } else {
    return <Preloader />;
  }
};
UserPage.propTypes = {
  id: PropTypes.string
};

export default UserPage;
