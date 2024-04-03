
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
              required: ['name', 'price', 'image', 'category_id'],
              properties: {
                  name: {
                      type: 'string',
                      description: 'Name of the product'
                  },
                  price: {
                      type: 'number',
                      description: 'Price of the product'
                  },
                  image: {
                      type: 'url',
                      description: 'Image of the product'
                  },
                  categoryId:{
                    type: 'number',
                    description: 'Category_ID of the product'
                  }
              },
              example: {
                  productName: 'Smartwatch M! Premium',
                  productPrice: 199,
                  productImage: 'http://img.com/products/11',
                  category: '1'
              }
          },
          user: {
            type: 'object',
            required: ['email', 'password'],
            properties: {
                email: {
                    type: 'string',
                    format: 'email',
                    description: 'Email of the user'
                },
                password: {
                  type: 'string',
                  description: 'Password of the user'
                }
            },
            example: {
              userEmail: "robertaso@gmail.com",
              password: "user123",
            }
          },
          category: {
            type: 'object',
            required: ['name', 'image'],
            properties: {
                name: {
                    type: 'string',
                    description: 'Name of the category'
                },
                image: {
                    type: 'url',
                    description: 'Image of the category'
                },
            },
            example: {
              name: "Technology",
              image: "https://img.com/technology/27854",
            }
          },
          customer: {
            type: 'object',
            required: ['name', 'lastname', 'address', 'phone', 'birthday'],
            properties: {
                name: {
                    type: 'string',
                    description: 'Name of the customer'
                },
                lastname: {
                    type: 'string',
                    description: 'Lastname of the customer'
                },
                address: {
                    type: 'string',
                    description: 'Address of the customer'
                },
                phone: {
                  type: 'number',
                  description: 'Phone number of the customer'
                },
                birthdate: {
                  type: 'string',
                  description: 'Birthdate of the customer'
                }
            },
            example: {
              name: "Elon",
              lastname: "Musk",
              address: "Hollywood Blvd 1234",
              phone: "3511234567",
              birtdate: "1995-04-25",
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
    "./api/routes/customersRouter.js",
  ],
};

module.exports = options;
