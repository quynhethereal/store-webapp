import React from 'react'
import ShopData from './shop.data'
import PreviewCollections from '../../components/preview-collections/preview-collections.component'


class ShopPage extends React.Component{
    constructor(props){
        super();
        this.state = {
            collections: ShopData
        }
    }

    render(){
        const {collections} = this.state;
        return (<div className="shop-page">
            {
                collections.map(({id,...otherProps}) => (
                    <PreviewCollections key={id} {...otherProps}></PreviewCollections>
                ))

            };
           
        </div>)
    }
}

export default ShopPage