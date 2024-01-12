# Product API

This project provides a simple RESTful API for an Product API system, allowing users to perform operations related to products and variants.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Documentation](#api-documentation)
  - [Create a Product](#create-a-product)
  - [Search Products](#search-products)
- [Testing](#testing)
- [Architecture](#architecture)


- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js
- npm
- MongoDB
- Mongoose
- chai
- mocha
- chai-http

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/raj992722/productApi.git

2. Install dependencies

    ```bash
    
   cd productApi
   npm install

3. Running the application

    ```bash
    npm start
The API will be accessible at http://localhost:3000.

# API DOCUMENTATION
## CREATE A PRODUCT
### ENDPOINT `POST /api/products`
### REQUEST BODY :
    
    {
        "name": "Example Product",
        "description": "Lorem ipsum",
        "price": 19.99,
        "variants": [
      {
      "name": "Variant 1",
            "sku": "SKU123",
            "additional_cost": 5.99,
            "stock_count": 50
          }
        ]
      }

### RESPONSE:
        {
      "_id": "generated-id",
      "name": "Example Product",
      "description": "Lorem ipsum",
      "price": 19.99,
      "variants": [
        {
          "_id": "variant-id",
          "name": "Variant 1",
          "sku": "SKU123",
          "additional_cost": 5.99,
          "stock_count": 50
        }
      ]
    }
## SEARCH PRODUCTS
### ENDPOINT `GET /api/products/search?query=example`
### QUERY PARAMETER   `query`

       
        GET /api/products/search?query=Example

### RESPONSE
        [
      {
        "_id": "product-id",
        "name": "Example Product",
        "description": "Lorem ipsum",
        "price": 19.99,
        "variants": [
          {
            "_id": "variant-id",
            "name": "Variant 1",
            "sku": "SKU123",
            "additional_cost": 5.99,
            "stock_count": 50
          }
        ]
      }
    ]

## TESTING
  Run tests using the following command:
        ```bash
        npm test
## ARCHITECTURE
The project follows a simple Express.js and MongoDB architecture. Models are defined using Mongoose for data handling.
## LICENSE
This project is licensed under the [MIT License]().


    

    



