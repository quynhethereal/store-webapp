import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import '../preview-collections/preview-collections.styles.scss'

const PreviewCollections = ({title,items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter((item,index) => index <4)
                .map(({id,...itemProps}) =>  (<CollectionItem key={id} {...itemProps}></CollectionItem>))
            }
        </div>
    </div>
)

export default PreviewCollections;