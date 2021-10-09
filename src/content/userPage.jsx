import React, { useEffect, useState } from "react";
import api from "../api";
import PropTypes from "prop-types";
import Preloader from "../utils/preloader";

const UserPage = ({ id }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    api.users.getById(id).then((data) => setUser(data));
  }, []);

  if (user) {
    return (
      <div>
        <h1>{user.name}</h1>
        <h4>{`${user.age} года`}</h4>
        <p>{user.aboutMe}</p>
        <p>{`Социальная сеть: ${user.socialNetwork}`}</p>
        <p>{user.session}</p>
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
