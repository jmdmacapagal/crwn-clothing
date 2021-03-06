import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverviewContainer from "../../components/collectionsOverview/collectionsOverview.container";
import CollectionContainer from "../collection/collection.container";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

export default connect(null, { fetchCollectionsStart })(Shop);
