import React from "react";
import { Grid } from "@material-ui/core";

const PostAdPage = () => {
  return (
    <div>
      <div className="post-ad-page">
        <div className="main-product-details">
          <h2>Add Some Details</h2>
          <div className="input-field title-input-container">
            <p className="label item-name">Ad Title *</p>
            <input
              type="text"
              placeholder="enter the product name"
              maxLength={49}
            />
          </div>
          <div className="input-field description-input-container">
            <p className="label item-description">Short Description *</p>
            <input
              type="text"
              placeholder="enter information about brands, etc."
              maxLength={1029}
            />
          </div>
          <div className="input-field details-input-container">
            <p className="label item-details">
              <input
                type="text"
                placeholder="include condition, features and the reason for selling"
                maxLength={2048}
              />
            </p>
          </div>
        </div>
        <div className="price-details-container">
          <h2>Essential Details</h2>
          <div className="input-field price-input-container">
            <p className="label item-price">Set a Price *</p>
            <input type="number" placeholder="enter your Selling Price" />
          </div>
          <div className="input-field tags-input-container">
            <p className="label item-tags">Tags</p>
            <input
              type="text"
              placeholder="input tags that defines your product"
            />
          </div>
        </div>
        <div className="Upload upto 12 images">
          <Grid lg={12} item container spacing={1} direction="row">
            <Grid lg={3} item>
              <input type="image" />
              {/* <img 
                     src=""
                     alt="item-image"
                    /> */}
            </Grid>
            <Grid lg={3} item>
              <input type="image" />
              {/* <img 
                     src=""
                     alt="item-image"
                    /> */}
            </Grid>
            <Grid lg={3} item>
              <input type="image" />
              {/* <img 
                     src=""
                     alt="item-image"
                    /> */}
            </Grid>
          </Grid>
        </div>
        <div className="location-container">
          <div className="input-field state-input-container">
            <p className="label state-input">State *</p>
            <input type="text" placeholder="e.g. Assam" />
          </div>
          <div className="input-field city-input-container">
            <p className="label city-input">City *</p>
            <input type="text" placeholder="e.g. Dispur" />
          </div>
        </div>
        <div className="confirm-post-container">
          <input type="checkbox" />
          <label>
            I have rechecked the details entered by me and would like to post
            this product for sale.
          </label>
        </div>
        <div className="post-btn">Post</div>
      </div>
    </div>
  );
};

export default PostAdPage;
