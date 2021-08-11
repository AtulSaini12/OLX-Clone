import React from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import { FcLike, FcLikePlaceHolder } from "react-icons/fc";
import { Link } from "react-router-dom";

import { Footer } from "./index";
function ProductInfoPage() {
  const tags = [
    "Headphones",
    "brand",
    "noise cancellation",
    "priceless",
    "best value",
  ];
  return (
    <div>
      <div className="product-info-container">
        <ul className="product-tags-list">
          <li>
            <h4>Tags :</h4>
          </li>
          {tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
        <div className="product-info-section">
          <div className="left-section">
            <div className="product-image-container">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt="product-image"
              />
              <FcPrevious
                className="prev-icon icon"
                onClick={() => {
                  console.log("show previous Image");
                }}
              />
              <FcNext
                className="next-icon icon"
                onClick={() => {
                  console.log("show Next Image");
                }}
              />
              <span className="image-count">1/12</span>
            </div>
            <div className="product-description-container">
              <p className="product-description">
                very good headphones, best quality headphones.
              </p>
            </div>
          </div>
          <aside>
            <div className="right-section">
              <div className="product-details">
                <h4>₹ Price</h4>
                <p>Description</p>
                <div className="item-footer">
                  <ul className="item-footer-list" type="none">
                    <li>Location</li>
                    <li>Date</li>
                  </ul>
                </div>
                <FcLike
                  className="product-like-icon"
                  onClick={() => {
                    console.log("add to fav");
                  }}
                />
              </div>
              <div className="seller-description">
                <h3>Seller Details</h3>
                <ul className="seller-details-list">
                  <li>
                    {/* <div className="circle-avatar"> */}
                    <img
                      className="seller-profile-image footer-list"
                      src="https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg"
                      alt="profile-image"
                    />
                    {/* </div> */}
                  </li>
                  <li className="seller-name">
                    <h5>Name</h5>
                    <p>Member since Jul 2018</p>
                  </li>
                  <li>
                    <FcNext
                      onClick={() => {
                        console.log("go to user profile");
                      }}
                    />
                  </li>
                </ul>
                <Link to="/chat">
                  <button className="to-chat-btn">Chat with Seller</button>
                </Link>
                {/* If Logged In */}
                <button className="to-chat-btn">Make an Offer</button>
              </div>
              <ul className="ad-details">
                <li id="ad-id">Ad ID A249876346</li>
                <li id="report-ad">Report this Ad</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductInfoPage;
