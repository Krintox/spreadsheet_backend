  
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const sheetRoutes = require('./routes/sheetRoutes');
require('dotenv').config();
require('./config/googleAuth');

const app = express();

// MongoDB connection
connectDB();

// Middleware
app.use(express.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);
app.use('/sheets', sheetRoutes);

module.exports = app;
