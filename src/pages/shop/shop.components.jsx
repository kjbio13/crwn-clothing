import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';


//thunk actions
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

//container
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionsPageContainer from '../../pages/collection/collection.container'

const ShopPage = ({ match, fetchCollectionsStart }) => {


    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])


    return (
        <div className="shop-page" >
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewContainer} />

            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionsPageContainer} />

        </div >
    );
}


const mapDispatchToProps = dispatch => ({


    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())


})

export default connect(null, mapDispatchToProps)(ShopPage);