import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import { Item } from "./index";

function Items() {
  const items = [
    {
      id: "1",
      itemName: "Headphones",
      description: "JBL Brand",
      price: "200",
      itemImg:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      location: "Gurgaon, Haryana",
      date: "12/08/2021",
      isFav: false,
    },
    {
      id: "2",
      itemName: "Headphones",
      description: "Boat Brand",
      price: "150",
      itemImg:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      location: "Gurgaon, Haryana",
      date: "12/08/2021",
      isFav: false,
    },
    {
      id: "3",
      itemName: "Headphones",
      description: "Asics Brand",
      price: "2000",
      itemImg:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      location: "Gurgaon, Haryana",
      date: "12/08/2021",
      isFav: false,
    },
    {
      id: "4",
      itemName: "Headphones",
      description: "Buelts Brand",
      price: "1200",
      itemImg:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      location: "Gurgaon, Haryana",
      date: "12/08/2021",
      isFav: false,
    },
    {
      id: "5",
      itemName: "Headphones",
      description: "Desi Brand ",
      price: "12000",
      itemImg:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      location: "Gurgaon, Haryana",
      date: "12/08/2021",
      isFav: false,
    },
  ];
  return (
    <div className="items">
      <Grid lg={12} item container spacing={2} direction="row">
        {items.map((item) => (
          <Item item={item} id={item.id} />
        ))}
      </Grid>
    </div>
  );
}

export default Items;
