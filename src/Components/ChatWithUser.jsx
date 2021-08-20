import React from "react";
import { useState } from "react";
import { FaFlag, FaRegFlag } from "react-icons/fa";
import { RiDeleteBin6Fill, RiSendPlane2Fill } from "react-icons/ri";

function ChatWithUser(props) {
  const [isFlagged, setFlag] = useState(false);
  const [chat, setChat] = useState("");
  const [chats, setChats] = useState([
    {
      me: false,
      message: "Hi, is this item available ?",
      time: "12:32 pm",
    },
    { me: true, message: "yes, this is avaiable", time: "12:38 pm" },
  ]);

  const currUser = {
    id: 4,
    sellerName: "Kaushal",
    itemName: "Saaree",
    itemPrice: 200,
    userProfile:
      "https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg",
    chatFlagged: false,
  };

  const handleFlag = () => {
    setFlag(!isFlagged);
  };

  const handleChange = (e) => {
    setChat(e.target.value);
  };

  const handleClick = () => {
    const curr = {
      me: true,
      message: chat,
      time: new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    };
    chats.push(curr);
    console.log("chats ::; ", chats);
    setChats(chats);
  };

  return (
    <div className="chat-right-section">
      <div className="header-chat">
        <ul className="chat-user-header">
          <li>
            <ul className="hor-list-chat-header">
              <li>
                <img
                  className="chat-user-profile"
                  src={currUser["userProfile"]}
                  alt="profile-image"
                />
              </li>
              <li>{currUser["sellerName"]}</li>
            </ul>
          </li>
          <li>
            <ul className="header-chat-icon">
              <li>
                {!isFlagged ? (
                  <FaRegFlag id="imp-flag" onClick={handleFlag} />
                ) : (
                  <FaFlag id="imp-flag" onClick={handleFlag} />
                )}
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

        {chats.map((chat) => (
          <div className="chat-messages">
            <div
              className={
                chat["me"] ? "chat-bubble self-chat" : "chat-bubble other-chat"
              }
            >
              {chat["message"]} <span>{chat["time"]}</span>
            </div>
          </div>
        ))}
        {/* <div className="chat-messages">
          <div className="chat-bubble  other-chat">
            Fine, wbu? <span>12:32 pm</span>
          </div>
        </div> */}
        {/* <div className="chat-messages">
          <div className="chat-bubble self-chat">
            How are Ya? <span>12:32 pm</span>
          </div>
        </div> */}
      </div>
      <div className="type-chat">
        <input
          type="text"
          placeholder="type your message here."
          className="chat-input"
          onChange={(e) => handleChange(e)}
        />
        <div className="send-icon" onClick={handleClick}>
          <RiSendPlane2Fill id="send-chat-icon" />
        </div>
      </div>
    </div>
  );
}

export default ChatWithUser;
