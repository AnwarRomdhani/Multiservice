// src/app.js

const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');

dotenv.config();

connectDB();

const app = express();

app.use(express.json()); // Body parser

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('User Service API is running');
});

module.exports = app;
