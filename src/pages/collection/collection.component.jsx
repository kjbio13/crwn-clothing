import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
    // console.log(collection);

    const { title, items } = collection;

    return (

        <div className="collection-page">
            <h1 className="title">{title}</h1>
            <div className="items">
                {
                    items.map(item => (<CollectionItem key={item.id} item={item} />))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state) //passing the url match.params.collectionId as a parameter in selector -- selector finds the match in the collection
})


export default connect(mapStateToProps)(CollectionPage);