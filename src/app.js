const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const userRoutes = require('./routes/user.routes');
const employeeRoutes = require('./routes/employee.routes');

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', employeeRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ status: false, message: 'Not Found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ status: false, message: err.message || 'Server Error' });
});

module.exports = app;
