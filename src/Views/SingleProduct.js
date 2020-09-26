import React from 'react';
import {useParams} from "react-router-dom";
import Product from './Products'

function SingleProduct() {

    const { id } = useParams();
    return ( 
        <div > 
            <Product id={id}/> 
        </div>
    )
};

export default SingleProduct