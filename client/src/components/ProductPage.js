import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductPage = (props) => {
    const {id} = props;
    const [product, setProduct] = useState({});
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res)=>{console.log(res.data); setProduct(res.data);})
            .catch((err)=>{console.log(err);})
    }, [])

    return (
        <div>
            <h1>{product.title}</h1>
            <h3>Price: {product.price}</h3>
            <p>description: {product.description}</p>
        </div>
    )
}
export default ProductPage;