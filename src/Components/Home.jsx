import React from "react";
import { Footer } from "./index";

import { Items } from "./index";
function Home() {
  return (
    <div>
      <div className="home-container">
        <h3>Fresh Recommendations</h3>
        <Items />
        <div className="load-btn-container">
          <button className="load-btn">Load More</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
