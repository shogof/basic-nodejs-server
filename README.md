# My Node.js Server

## Overview

This project is a simple Node.js server built with Express.js, designed to implement basic CRUD (Create, Read, Update, Delete) operations for managing users and products. It serves static HTML files and handles JSON data seamlessly.

## Features

- **Static Homepage:** Serves a user-friendly static HTML homepage.
- **CRUD Operations:**
  - **Users:**
    - `GET /users`: Retrieve a list of all users.
    - `POST /users`: Create a new user.
    - `PUT /users/:id`: Update an existing user's details.
    - `DELETE /users/:id`: Remove a user from the database.
  - **Products:**
    - `GET /products`: Retrieve a list of all products.
    - `POST /products`: Add a new product.
    - `PUT /products/:id`: Update an existing product's details.
    - `DELETE /products/:id`: Remove a product from the database.
- **Static Assets:** Serves CSS and JavaScript files from the public directory.
- **JSON Data Handling:** Accepts JSON data in request bodies for POST and PUT requests.
- **Organized Routing:** Utilizes Express Router for a clean and organized route structure.
- **Custom 404 Page:** Displays a friendly 404 error page for non-existent routes.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- npm (Node Package Manager), which comes with Node.js.

### Installation

1. Clone the repository:
   ```bash
   git clone <git@github.com:shogof/basic-nodejs-server.git>
   cd my-node-server
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```

### Running the Server

1. Start the server with the following command:
   ```bash
   node server.js
   ```
2. Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```

### API Endpoints

#### Users

- **GET /users**
  - Retrieve a list of all users.
- **POST /users**

  - Create a new user.
  - **Example JSON body:**
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "securepassword"
    }
    ```

- **PUT /users/:id**

  - Update the details of a user identified by `id`.

- **DELETE /users/:id**
  - Delete a user identified by `id`.

#### Products

- **GET /products**
  - Retrieve a list of all products.
- **POST /products**

  - Create a new product.
  - **Example JSON body:**
    ```json
    {
      "name": "Product Name",
      "price": 19.99,
      "description": "Description of the product."
    }
    ```

- **PUT /products/:id**

  - Update the details of a product identified by `id`.

- **DELETE /products/:id**
  - Delete a product identified by `id`.

### Custom 404 Page

If a user accesses a non-existent route, the server responds with a custom 404 error page, providing a better user experience.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

