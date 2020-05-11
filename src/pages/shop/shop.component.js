import React from "react";
import CollectionsOverview from "../../components/collectionsOverview/collectionsOverview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";

const Shop = ({ match }) => {
  console.log(match.path);
  return (
    <div className="shop">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default Shop;
