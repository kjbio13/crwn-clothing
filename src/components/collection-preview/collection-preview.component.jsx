//Page
import React from "react";

//styles
import './collection-preview.styles.scss';

//components
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = (props) => (

    <div className="collection-preview">

        <h1 className="title">{props.title.toUpperCase()}</h1>

        <div className="preview">
            {
                props.items
                    .filter((item, idx) => idx < 4)
                    .map(
                        (( item ) =>

                            <CollectionItem key={item.id} item={item} />

                        )
                    )
            }
        </div>

    </div>

)

export default CollectionPreview;