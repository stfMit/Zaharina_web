const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
    try {
        // Basic filtering
        const { category, inStock } = req.query;
        let query = {};

        if (category) {
            query.category = category;
        }

        if (inStock === 'true') {
            query.inStock = true;
        }

        const products = await Product.find(query);
        res.json(products);
    } catch (error) {
        console.error('Get products error:', error);
        res.status(500).json({ message: 'Server error while fetching products' });
    }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Get product by ID error:', error);
        res.status(500).json({ message: 'Server error while fetching product' });
    }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = async (req, res) => {
    try {
        const product = new Product({
            name: 'Sample name',
            description: 'Sample description',
            price: 0,
            image: '/images/sample.jpg',
            category: 'Classic',
            ingredients: [],
            stockQuantity: 0,
            inStock: true
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        console.error('Create product error:', error);
        res.status(500).json({ message: 'Server error while creating product' });
    }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            image,
            category,
            ingredients,
            stockQuantity,
            inStock
        } = req.body;

        const product = await Product.findById(req.params.id);

        if (product) {
            product.name = name || product.name;
            product.description = description || product.description;
            product.price = price || product.price;
            product.image = image || product.image;
            product.category = category || product.category;
            product.ingredients = ingredients || product.ingredients;
            product.stockQuantity = stockQuantity !== undefined ? stockQuantity : product.stockQuantity;
            product.inStock = inStock !== undefined ? inStock : product.inStock;

            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Update product error:', error);
        res.status(500).json({ message: 'Server error while updating product' });
    }
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct
};