import React from "react";
import CollectionPreview from "../../components/collectionPreview/collectionPreview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors";

const Shop = ({ collections }) => {
  return (
    <div className="shop">
      {collections.map((collection) => {
        return <CollectionPreview key={collection.id} {...collection} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(Shop);
