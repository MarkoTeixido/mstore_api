
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "M!Store Fake API",
      version: "1.0.0",
      description: "API to generate realistic fake product data for testing and development."
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: 'API Server'
      },
    ],
    components: {
      schemas: {
          product: {
              type: 'object',
              required: ['productName', 'productPrice', 'productImage'],
              properties: {
                  productName: {
                      type: 'string',
                      description: 'Name of the product'
                  },
                  productPrice: {
                      type: 'number',
                      description: 'Price of the product'
                  },
                  productImage: {
                      type: 'url',
                      description: 'Image of the product'
                  }
              },
              example: {
                  productName: 'Smartwatch M! Premium',
                  productPrice: 199,
                  productImage: 'http://example.com/img/11'
              }
          }
      },
      responses : {
          400: {
              description: 'Missing API key - include it in the Authorization header',
              contents: 'application/json'
          },
          401: {
              description: 'Incorrect format',
              contents: 'application/json'
          },
          404: {
              description: 'Not found - the product was not found',
              contents: 'application/json'
          }
      },
    }
  },
  apis: ["./api/routes/productsRouter.js"],
};

module.exports = options;
