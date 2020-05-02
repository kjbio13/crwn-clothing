import React from 'react';
import { Route } from 'react-router-dom';

//components
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

//pages
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (

    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`}  component={CollectionPage} />
    </div>

)


export default ShopPage; 