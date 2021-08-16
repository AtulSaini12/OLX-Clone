import React from "react";
import { FaFlag, FaRegFlag } from "react-icons/fa";
import { RiDeleteBin6Fill, RiSendPlane2Fill } from "react-icons/ri";

function ChatWithUser() {
  return (
    <div className="chat-right-section">
      <div className="header-chat">
        <ul className="chat-user-header">
          <li>
            <ul className="hor-list-chat-header">
              <li>
                <img
                  className="chat-user-profile"
                  src="https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg"
                  alt="profile-image"
                />
              </li>
              <li>User name</li>
            </ul>
          </li>
          <li>
            <ul className="header-chat-icon">
              <li>
                <FaRegFlag id="imp-flag" />
              </li>
              <li>
                <RiDeleteBin6Fill id="delete-icon" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="realtime-chat">
        <div className="sized-box"> </div>
        <div className="chat-messages">
          <div className="chat-bubble self-chat">
            How are Ya? <span>12:32 pm</span>
          </div>
        </div>
        <div className="chat-messages">
          <div className="chat-bubble  other-chat">
            Fine, wbu? <span>12:32 pm</span>
          </div>
        </div>
        <div className="chat-messages">
          <div className="chat-bubble self-chat">
            How are Ya? <span>12:32 pm</span>
          </div>
        </div>
      </div>
      <div className="type-chat">
        <input
          type="text"
          placeholder="type your message here."
          className="chat-input"
        />
        <div className="send-icon">
          <RiSendPlane2Fill id="send-chat-icon" />
        </div>
      </div>
    </div>
  );
}

export default ChatWithUser;
