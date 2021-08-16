import React from "react";

import { ChatUserProfile, ChatWithUser } from "./index";

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
      <ChatWithUser />
    </div>
  );
};

export default ChatPage;
