import React, { useEffect, useState } from "react";
import MainContainer from "../components/main/mainContsainer";
import API from "../api";

const Main = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    API.users.fetchUsersAll().then((data) => setUser(data));
  }, []);

  return <MainContainer users={user} />;
};

export default Main;
