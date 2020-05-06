import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

//components
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';


//pages
import CollectionPage from '../collection/collection.component';

//firestore
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

//actions
import { updateCollections } from '../../redux/shop/shop.actions';

// const ShopPage = ({ match }) => (

//     <div className="shop-page">
//         <Route exact path={`${match.path}`} component={CollectionsOverview} />
//         <Route path={`${match.path}/:collectionId`}  component={CollectionPage} />
//     </div>

// )


//spinner - high order component
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    state = {
        loading: true
    }
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collection');



        //using snapshot
        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = convertCollectionSnapshotToMap(snapshot)
        //     console.log(collectionsMap);
        //     updateCollections(collectionsMap)
        //     this.setState({ loading: false })
        // });

        // using .get promise
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot)
            console.log(collectionsMap);
            updateCollections(collectionsMap)
            this.setState({ loading: false })
        })

        // //too nested
        //         fetch('https://firestore.googleapis.com/v1/projects/crwn-db-c482a/databases/(default)/documents/collection')
        //         .then(response => response.json())
        //         .then(response => console.log(response))
        //         }

    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page" >
                {/* <Route exact path={`${match.path}`} component={CollectionsOverview} /> */}
                < Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />

                {/* <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />

            </div >
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);