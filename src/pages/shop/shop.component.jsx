import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/firebases.utils";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionPageContainer from "../collection/collection.container";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

class ShopPage extends React.Component {
  componentDidMount() {
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection("collections");
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
    //   async (snapshot) => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     updateCollections(collectionsMap);
    //     //here we know that it has been fetched from the backend so we will set loading as false
    //     this.setState({ loading: false });
    //   }
    // );
    // collectionRef.get().then((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });

    //////redux thunk
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }
  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

// export default ShopPage;
export default connect(null, { fetchCollectionsStart })(ShopPage);
