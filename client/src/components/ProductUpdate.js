import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductUpdate = (props) => {
    const {id} = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('')
    useEffect(() => {
        axios.get(`/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price); 
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])
    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`/api/update/${id}`, {
            title,
            price,
            description,
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Updating</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" onChange = {(e) => setTitle(e.target.value)} name="title" value={title} />
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="number" onChange = {(e) => setPrice(e.target.value)} name="price" value={price} />
                </p>
                <p>
                    <label>Description</label><br/>
                    <textarea type="text" onChange = {(e) => setDescription(e.target.value)} name="description" value={description} />
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default ProductUpdate;