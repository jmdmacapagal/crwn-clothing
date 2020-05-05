import React, { Component } from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menuItem.component";

class Directory extends Component {
  state = {
    items: [
      {
        title: "Hats",
        subtitle: "Shop Now",
      },
      {
        title: "Jackets",
        subtitle: "Shop Now",
      },
      {
        title: "Sneakers",
        subtitle: "Shop Now",
      },
      {
        title: "Womens",
        subtitle: "Shop Now",
      },
      {
        title: "Mens",
        subtitle: "Shop Now",
      },
    ],
  };
  render() {
    return (
      <div className="directory">
        {this.state.items.map((item, index) => {
          return <MenuItem key={index} {...item} />;
        })}
      </div>
    );
  }
}

export default Directory;
