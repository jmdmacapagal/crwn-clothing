import React from "react";
import { SHOP_DATA } from "./shop.data";
import CollectionPreview from "../../components/collectionPreview/collectionPreview.component";

class Shop extends React.Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop">
        {collections.map((collection) => {
          return <CollectionPreview key={collection.id} {...collection} />;
        })}
      </div>
    );
  }
}

export default Shop;
