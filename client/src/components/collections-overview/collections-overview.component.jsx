import React from 'react';
import PreviewCollections from '../../components/preview-collections/preview-collections.component';

import { connect } from 'react-redux';


import {createStructuredSelector} from 'reselect';
import {selectCollectionForPreview} from '../../redux/shop/shop.selector'
import { CollectionsOverviewContainer } from './collections-overview.styles';


export const CollectionsOverview = ({collections}) => (
    < CollectionsOverviewContainer>
         {collections.map(({ id, ...otherProps }) => (
      <PreviewCollections key={id} {...otherProps}></PreviewCollections>
    ))}
    ;
    </ CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({collections:selectCollectionForPreview  })


export default connect(mapStateToProps,null)(CollectionsOverview);