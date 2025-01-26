const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Logistics Order API',
            version: '1.0.0',
            description: 'API for managing logistics orders',
        },
        servers: [
            { url: 'http://localhost:3002/api' },
        ],
    },
    apis: ['./src/routes/*.js'], // Path to API documentation
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };
