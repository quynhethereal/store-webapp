import React,{useEffect} from 'react';

import '../shop/shop.styles.scss';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container'


const ShopPage = ({match,fetchCollectionsStart}) => {


  useEffect(() =>{
    fetchCollectionsStart();
  },[fetchCollectionsStart])

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component = {CollectionOverviewContainer}
        
        ></Route>
        <Route
          path={`${match.path}/:collectionId`}
          component = {CollectionPageContainer}
        ></Route>
      </div>
    );
  }

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null,mapDispatchToProps)(ShopPage);
