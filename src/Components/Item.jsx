import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { Grid } from "@material-ui/core";

function Item() {
  return (
    <Grid lg={3} item>
      <div className="item-container">
        <div className="upper-container">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="item-image"
            />
            <FcLike
              onClick={() => {
                // console.log("clicked");
              }}
              className="icon-fav"
            />
            <h6 className="add-fav-text">Add to Fav</h6>
          </div>
        </div>
        <div className="lower-container">
          <h3>₹ Price</h3>
          <p>Description</p>
          <div className="item-footer">
            <ul className="item-footer-list" type="none">
              <li>Location</li>
              <li>Date</li>
            </ul>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default Item;
