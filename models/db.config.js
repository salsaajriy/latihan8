const mysql = require('mysql2');

//konfigurasi koneksi database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbpraktikum8'
});

//coba koneksi
db.connect(err => {
    if (err) {
        console.error('koneksi database gagal:', err);
    } else {
        console.log('terhubung ke database MySQL');
    }
});

module.exports = db;