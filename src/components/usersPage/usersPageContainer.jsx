import React, { useEffect, useState } from "react";
import API from "./../../api";

const UsersPageContainer = () => {
  const [user, setUser] = useState()
  useEffect(() => {
    API.users.fetchUsersAll().then(res => setUser(res))
  }, [])
  console.log(user);
  return (
    <h1>userpage</h1>
  );
};

export default UsersPageContainer;
