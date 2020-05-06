import React from 'react';

//connect to store
import { connect } from 'react-redux'

//styles
import './collection-item.styles.scss'

//components
import CustomButton from '../custom-button/custom-button.component'

import { addItemAction } from '../../redux/cart/cart.actions'

const CollectionItem = ({ item, addItemProp }) => { 

    const { name, price, imageUrl } = item;

    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}

            />

            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton className='custom-button' onClick={() => addItemProp(item)} inverted> Add to cart </CustomButton>
        </div>


    )
};

const mapDispatchToProps = dispatch => ({
    addItemProp: item => dispatch(addItemAction(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);