require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());


const authRoutes = require('./routes/auth');
const helloRoutes = require('./routes/hello');

app.use('/api/v1', authRoutes); 
app.use('/api/v1', helloRoutes); 

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
