import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";

import { Footer } from "./index";
const UserProfile = () => {
  return (
    <div>
      <div className="user-profile">
        <div className="upper-profile-container">
          <div className="image-container-profile">
            <img
              className="user-profile-image"
              src="https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg"
              alt="userImage"
            />
            <div className="user-details-profile">
              <h3>Name Surname</h3>
              <p>Member Since Aug 2021</p>
              <br />
              <h4>Linked Profiles :</h4>
              <ul className="linked-accounts-profile">
                <li>
                  <AiFillGoogleCircle id="google-icon-profile" />
                </li>
                <li>
                  <ImMail4 id="mail-icon-profile" />
                </li>
              </ul>
            </div>
          </div>
          <div className="upper-right-user-profile">
            <div className="followers-following-profile">
              <ul className="followers-following-list-profile">
                <li>
                  <ul className="followers-profile-num">
                    <li id="followers-number">0</li>
                    <li>Followers</li>
                  </ul>
                </li>
                <li>
                  <p className="divider-profile">|</p>
                </li>
                <li>
                  <ul className="following-profile-num">
                    <li id="following-number">0</li>
                    <li>Following</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="edit-profile-btn">Edit Profile</div>
          </div>
        </div>
        <div className="lower-profile-container">
          <h3>Personal Details :</h3>
          <ul className="personal-details-list">
            <li>
              Email Id : <span>abc@def.com</span>
            </li>
            <li>
              Contact Number : <span>+91 9874653029</span>
            </li>
            <li>
              Address : <span>new house, kentsbury, USA</span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
