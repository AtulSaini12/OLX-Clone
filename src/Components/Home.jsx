import React from "react";

import { Items } from "./index";
function Home() {
  return (
    <div className="home-container">
      <h3>Fresh Recommendations</h3>
      <Items />
      <div className="load-btn-container">
        <button className="load-btn">Load More</button>
      </div>
    </div>
  );
}

export default Home;
