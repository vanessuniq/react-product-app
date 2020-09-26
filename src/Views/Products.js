import React from 'react';
import useAxiosGet from '../Hooks/HttpRequests'
import ProductCard from '../Components/ProductCard'

function Product(props) {
    let content;

    // create your own api
    const productUrl= `https://5f6f3db7adc24200166e0e78.mockapi.io/products/${props.id}`;

    let products = useAxiosGet(productUrl);

    if(products.loading) {
        content = (
            <div className="flex justify-center">
                <div className="loader"></div>
            </div>
        )
    } else if (products.data && Array.isArray(products.data)) {
        content = products.data.map(prod =>(
            <div key={prod.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
                <ProductCard product={prod}/>
            </div>
            )
        )
    } else if(products.data){
        content = <ProductCard product={products.data}/>
    } else if(products.error) {
        content = (<p> Product not found or There was an error loading the content. Please try eagain</p>)
    };
    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-2xl mb-3">Our Products</h1>
            <div className="md:flex flex-wrap md:-mx-3">
                { content } 
            </div>
        </div>
    ) 
}

Product.defaultProps = {id: ''}

export default Product;