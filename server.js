import express from 'express';
import userRoutes from './routes/user.routes.js';
import productRoutes from './routes/product.routes.js';

const app = express();
const port = 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
