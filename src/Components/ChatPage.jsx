import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { ChatUserProfile, ChatWithUser } from "./index";

const ChatPage = () => {
  const [currUser, setcurrUser] = useState(null);
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

  const chatWith = (id) => {
    const user = chats.filter((chat) => {
      return chat["id"] == id;
    });
    setcurrUser(user);
    console.log("user : ", user);
  };

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
            <ChatUserProfile
              key={chat["id"]}
              currChat={chat}
              handleClick={chatWith}
            />
          ))}
        </div>
      </div>
      <ChatWithUser user={currUser} />
    </div>
  );
};

export default ChatPage;
