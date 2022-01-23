import React, { useEffect } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const ProductList = (props) => {
    const {products, setProducts} = props;
    
    useEffect(() => {
        axios.get('/api/products')
        .then((res)=> {console.log(res.data); setProducts(res.data);})
        .catch((err) => {console.log(err);})
    }, [])

    const deleteProduct = (routeId) => {
        axios.delete(`/api/products/${routeId}`)
            .then(res => {
                const productList = products.filter((product, index) => product._id !== routeId)
                setProducts(productList)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {products.map((product, index) => {return (
            <div key={index}>
                <h3>{product.title}</h3><br/>
                <Link to={`/api/products/${product._id}`}>Details </Link>
                <Link to={`/api/update/${product._id}`}>Edit </Link>
                <button onClick={() => deleteProduct(product._id)}>Delete</button>
            </div>
            )})}
        </div>
    )
}
export default ProductList;