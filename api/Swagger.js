
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
                  productImage: 'http://img.com/products/11'
              }
          },
          user: {
            type: 'object',
            required: ['userName', 'userUsername', 'userEmail', 'userAvatar', 'userAddress', 'userPhone', 'userBirthdate', 'userRole'],
            properties: {
                userName: {
                    type: 'string',
                    description: 'Username of the user'
                },
                userEmail: {
                    type: 'string',
                    format: 'email',
                    description: 'Email of the user'
                },
                userAvatar: {
                  type: 'url',
                  description: 'Avatar of the user'
                },
                userAddress: {
                  type: 'string',
                  description: 'Address of the user'
                },
                userPhone: {
                  type: 'string',
                  description: 'Phone number of the user'
                },
                userBirthdate: {
                  type: 'string',
                  description: 'Birthdate of the user'
                },
                userRole: {
                  type: 'string',
                  description: 'Role of the user'
                }
            },
            example: {
              userName: "robertaso57",
              userEmail: "robertaso@gmail.com",
              userAvatar: "http://img.com/avatar/189",
              userAddress: "065 disney Islands",
              userPhone: "1-757-619-999",
              userBirthdate: "1999-01-01",
              userRole: "client",
            }
          },
          category: {
            type: 'object',
            required: ['categoryName', 'categoryImage'],
            properties: {
                categoryName: {
                    type: 'string',
                    description: 'Name of the category'
                },
                categoryImage: {
                    type: 'url',
                    description: 'Image of the category'
                },
            },
            example: {
              categoryName: "Technology",
              categoryImage: "https://img.com/technology/27854",
            }
          }
      },
      responses : {
          400: {
              description: 'Bad Request',
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
  apis: [
    "./api/routes/productsRouter.js",
    "./api/routes/usersRouter.js",
    "./api/routes/categoriesRouter.js",
  ],
};

module.exports = options;
