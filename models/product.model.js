import db from './db.config.js';

//model user (berisikan query database)
const Product = {
    getAll: callback => {
        db.query('SELECT * FROM products', callback);
    },
    
    getById: (id, callback) => {
        db.query('SELECT * FROM products WHERE id = ?', [id], callback);
    },

    create: (data, callback) => {
        db.query('INSERT INTO products (name, deskripsi, harga, foto) VALUES (?, ?, ?, ?)', [data.name, data.deskripsi, data.harga, data.foto], callback);
    },

    update: (id, data, callback) => {
        db.query('UPDATE products SET name = ?, deskripsi = ?, harga = ?, foto = ? WHERE id = ?', [data.name, data.deskripsi, data.harga, data.foto, id], callback);
    },

    delete: (id, callback) => {
        db.query('DELETE FROM products WHERE id = ?', [id], callback);
    }
};

export default Product;