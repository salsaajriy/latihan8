const express = require('express');
const app = express();
const port = 8001;

app.use(express.json());

//Routes
const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
