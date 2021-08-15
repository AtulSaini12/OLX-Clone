import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

const ChatUserProfile = ({ currChat }) => {
  return (
    <div>
      <div className="chat-profile">
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
            <RiDeleteBin6Fill id="chat-delete-user-icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChatUserProfile;
