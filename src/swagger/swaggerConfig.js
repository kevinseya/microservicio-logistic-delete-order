const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

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
            { url: 'http://localhost:7003/api' },
        ],
    },
    apis: [path.join(__dirname, "../routes/*.js")],  // Path to API documentation
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };
