import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

const ChatUserProfile = ({ currChat, handleClick }) => {
  return (
    <div>
      <div
        className="chat-profile"
        onClick={() => {
          handleClick(currChat["id"]);
        }}
      >
        <ul className="seller-details-list chat-profile-user">
          <li>
            <img
              className="seller-profile-image footer-list"
              src={currChat["userProfile"]}
              alt="profile-image"
            />
          </li>
          <li className="seller-name">
            <h5>{currChat["sellerName"]}</h5>
            <p>{currChat["itemName"]}</p>
          </li>
          <li>
            <RiDeleteBin6Fill
              id="chat-delete-user-icon"
              onClick={() => {
                console.log("delete : ", "deleted");
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChatUserProfile;
