import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Item(props) {
  const [isFav, setFav] = useState(false);
  const item = props.item;
  useEffect(() => {
    console.log("item : ", item);
    if (item["isFav"]) {
      setFav(true);
    } else {
      setFav(false);
    }
  }, []);

  const addToFavToggle = () => {
    setFav(!isFav);
  };

  return (
    <Grid lg={3} item>
      <div className="item-container">
        <div className="upper-container">
          <div className="image-container">
            <img src={item["itemImg"]} alt="item-image" />
            {isFav && (
              <FcLike
                onClick={() => {
                  setFav(!isFav);
                }}
                className="icon-fav"
              />
            )}
            {!isFav && (
              <FcLikePlaceholder
                onClick={addToFavToggle}
                className="icon-fav"
              />
            )}
            {!isFav && <h6 className="add-fav-text">Add to Fav</h6>}
            {isFav && <h6 className="add-fav-text">remove from Fav</h6>}
          </div>
        </div>
        <Link to="/productInfo" style={{ textDecoration: "none" }}>
          <div className="lower-container">
            <h3>₹ {item["price"]}</h3>
            <p>
              {item["description"].length > 30
                ? item["description"].substring(0, 29) + "..."
                : item["description"]}
            </p>
            <div className="item-footer">
              <ul className="item-footer-list" type="none">
                <li>{item["location"]}</li>
                <li>{item["date"]}</li>
              </ul>
            </div>
          </div>
        </Link>
      </div>
    </Grid>
  );
}

export default Item;
