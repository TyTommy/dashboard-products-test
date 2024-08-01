import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="p-4 flex flex-col">
      <div className="card">
        <div className="py-2">
          <strong className="px-2">Username:</strong>
          <span>{user?.username}</span>
        </div>
        <div className="py-2">
          <strong className="px-2">Password:</strong>
          <span>{user?.password}</span>
        </div>
        <div className="py-2">
          <strong className="px-2">Logged date:</strong>
          <span>{user?.loggedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
