import React from "react";
import { useParams } from "react-router-dom";
import Main from "../content/main";
import UserPage from "../content/userPage";

const UserList = () => {
  const params = useParams();
  const { userId } = params;

  return <>{userId ? <UserPage id={userId} /> : <Main />}</>;
};

export default UserList;
