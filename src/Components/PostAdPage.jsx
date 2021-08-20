import React from "react";
import { Grid } from "@material-ui/core";

import { Footer } from "./index";

const PostAdPage = () => {
  return (
    <div className="default">
      <div className="post-ad-page">
        <div className="main-product-details">
          <h2>Add Some Details</h2>
          <div className="input-field title-input-container">
            <p className="label ">Ad Title *</p>
            <input
              type="text"
              className="item-name"
              placeholder="enter the product name"
              maxLength={49}
            />
          </div>
          <div className="input-field description-input-container">
            <p className="label ">Short Description *</p>
            <input
              type="text"
              className="item-description"
              placeholder="enter information about brands, etc."
              maxLength={1029}
            />
          </div>
          <div className="input-field details-input-container">
            <p className="label ">Details</p>
            <input
              type="text"
              className="item-details"
              placeholder="include condition, features and the reason for selling"
              maxLength={2048}
            />
          </div>
        </div>
        <div className="price-details-container">
          <h2>Essential Details</h2>
          <div className="input-field price-input-container">
            <p className="label ">Set a Price *</p>
            <input
              className="item-price"
              type="number"
              placeholder="enter your Selling Price"
            />
          </div>
          <div className="input-field tags-input-container">
            <p className="label ">Product Type *</p>
            <input
              className="item-tags"
              type="text"
              placeholder="e.g. - shoes, jacket, etc."
            />
          </div>
        </div>
        <div className="upload-image-container">
          <h2>Upload upto 12 Images</h2>
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
          <h2>Location </h2>
          <div className="input-field state-input-container">
            <p className="label ">State *</p>
            <input
              className="state-input"
              type="text"
              placeholder="e.g. Assam"
            />
          </div>
          <div className="input-field city-input-container">
            <p className="label ">City *</p>
            <input
              className="city-input"
              type="text"
              placeholder="e.g. Dispur"
            />
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
