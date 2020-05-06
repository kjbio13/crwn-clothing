import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

//styles
import './component-overview.styles.scss'

//selectors
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

//components 
import CollectionPreview from '../../components/collection-preview/collection-preview.component'


const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {console.log(collections + "logging")}

        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})



export default connect(mapStateToProps)(CollectionsOverview);