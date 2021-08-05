import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import { Item } from "./index";

function Items() {
  const items = ["1", "2", "3", "4", "5"];
  return (
    <div className="items">
      <Grid lg={12} item container spacing={2} direction="row">
        {items.map((item) => (
          <Item />
        ))}
      </Grid>
    </div>
  );
}

export default Items;
