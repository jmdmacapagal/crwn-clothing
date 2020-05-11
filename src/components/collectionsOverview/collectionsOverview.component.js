import React from "react";
import "./collectionsOverview.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collectionPreview/collectionPreview.component";
import { selectShopCollections } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map((collection) => {
        return <CollectionPreview key={collection.id} {...collection} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
