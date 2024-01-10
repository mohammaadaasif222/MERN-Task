import Product from '../models/product.model.js';

export const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json({products});
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};
