import React, { useState } from 'react';
import axios from 'axios';
const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("")
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://192.168.0.4:8000/api/products', {
            title,
            price,
            description,
        })
            .then(res => {
                console.log(res)
                console.log(res.data)
                setPrice("")
                setTitle("")
                setDescription("")
            })
            .catch(err => console.log(err))
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)} name="title" value={title} />
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange = {(e)=>setPrice(e.target.value)} name="price" value={price} />
            </p>
            <p>
                <label>Description</label><br/>
                <textarea type="text" onChange = {(e)=>setDescription(e.target.value)} name="description" value={description} />
            </p>
            <input type="submit"/>
        </form>
    )
}
export default ProductForm;