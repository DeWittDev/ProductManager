const Product = require('../models/product.modules')

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err))
}
    
module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
}
    
module.exports.getOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
            .then((oneProduct) => res.json(oneProduct))
            .catch((err) => console.log(err))
}
