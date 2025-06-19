const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');
const swaggerUi = require('./swagger/swaggerConfig').swaggerUi;
const swaggerDocs = require('./swagger/swaggerConfig').swaggerDocs;
const sequelize = require('./config/dbConfig'); 

const app = express();

// Middleware setup
app.use(bodyParser.json());

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Redirect to Swagger when accessing the root URL
app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

// Routes setup
app.use('/api', orderRoutes);

// Start server
const PORT = 7003;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Synchronize models with the database
sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database synchronized successfully.');
    })
    .catch((error) => {
        console.error('Failed to synchronize database:', error);
    });