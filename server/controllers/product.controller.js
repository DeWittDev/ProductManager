const Product = require('../models/product.modules')

const createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

const getAllProducts = (req, res) => {
    Product.find({})
        .then(products => {
            console.log(products);
            res.json(products);
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

module.exports = {
    createProduct,
    getAllProducts,
}
