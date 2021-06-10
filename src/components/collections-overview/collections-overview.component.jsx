import React from 'react';
import PreviewCollections from '../../components/preview-collections/preview-collections.component';

import { connect } from 'react-redux';


import {createStructuredSelector} from 'reselect';
import {selectCollections } from '../../redux/shop/shop.selector'


export const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
         {collections.map(({ id, ...otherProps }) => (
      <PreviewCollections key={id} {...otherProps}></PreviewCollections>
    ))}
    ;
    </div>
)

const mapStateToProps = createStructuredSelector({collections:selectCollections  })


export default connect(mapStateToProps,null)(CollectionsOverview);