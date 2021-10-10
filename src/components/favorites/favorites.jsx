import React, { useState, useEffect } from "react";
import API from "../../api";
import MainContainer from "../main/mainContsainer";

const Favorites = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    API.users.fetchUsersAll().then((data) => setUser(data.filter((user) => JSON.parse(localStorage.getItem("favoritUsers")).includes(user.id))));
  }, [user]);

  return <MainContainer users={user} />;
};

export default Favorites;
