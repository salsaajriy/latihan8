import Product from '../models/product.model.js';

export const getAllProducts = (req, res) => {
    Product.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

export const getProductById = (req, res) => {
    const { id } = req.params;
    Product.getById(id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Product not found' });
        res.json(results[0]);
    });
};

export const createProduct = (req, res) => {
    console.log("ISI BODY YANG DITERIMA =>", req.body);

    const data = req.body;

    Product.create(data, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, ...data });
    });
};

export const updateProduct = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Product.update(id, data, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product updated successfully' });
    });
};

export const deleteProduct = (req, res) => {
    const { id } = req.params;
    Product.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted successfully' });
    });
};

