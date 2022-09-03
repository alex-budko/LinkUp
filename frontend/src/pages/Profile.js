import React, { useContext } from "react";
import { UserContext } from "../context/User";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  return <div>Profile</div>;
}

export default Profile;
