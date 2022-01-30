import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./suggestions.css";

export default function Suggestions({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const usersList = await axios.get("/users/allusers");
        setAllUsers(usersList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  return (
      
    <li className="sidebarFriend">
      {allUsers.map((people) => (
      <Link
      to={"/profile/" + people.username}
      style={{ textDecoration: "none" }}
      >
      <div className="sidebarPeopleWrapper">
        <img
          src={
            people.profilePicture
              ? PF + people.profilePicture
              : PF + "person/no-avatar.png"
          }
          alt=""
          className="sidebarFriendImg"
        />
        <span className="sidebarFriendName">{people.username}</span>
      </div>
      </Link>
          ))}
     
    </li>
  );
}
