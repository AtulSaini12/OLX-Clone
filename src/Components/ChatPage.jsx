import React from "react";
import { RiDeleteBin6Fill, RiSendPlane2Fill } from "react-icons/ri";
import { FaFlag, FaRegFlag } from "react-icons/fa";

import { ChatUserProfile } from "./index";

const ChatPage = () => {
  const chats = [
    {
      id: 1,
      sellerName: "Draupadi",
      itemName: "Saaree",
      itemPrice: 200,
      userProfile:
        "https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg",
      chatFlagged: false,
    },
    {
      id: 2,
      sellerName: "Maandavi",
      itemName: "Saaree",
      itemPrice: 200,
      userProfile:
        "https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg",
      chatFlagged: false,
    },
    {
      id: 4,
      sellerName: "Kaushal",
      itemName: "Saaree",
      itemPrice: 200,
      userProfile:
        "https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg",
      chatFlagged: false,
    },
    {
      id: 5,
      sellerName: "Drishti",
      itemName: "Saaree",
      itemPrice: 200,
      userProfile:
        "https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg",
      chatFlagged: false,
    },
  ];

  return (
    <div className="chat-page">
      <div className="chat-left-section">
        <div className="inbox">
          <h1>INBOX</h1>
        </div>
        <div className="quick-filters">
          <p>QUICK FILTERS</p>
          <ul className="filters-list">
            <li>All</li>
            <li>Unread</li>
            <li>Important</li>
          </ul>
        </div>
        <div className="no-scroll-bar chat-users-list">
          {chats.map((chat) => (
            <ChatUserProfile key={chat["id"]} currChat={chat} />
          ))}
        </div>
      </div>
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
    </div>
  );
};

export default ChatPage;
