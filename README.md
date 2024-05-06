# VueShopInventory

VueShopInventory is a simple Vue.js application for managing product inventory. It allows users to perform CRUD (Create, Read, Update, Delete) operations on products stored in a JSON Server.

## Features

- View a list of products
- View details of a specific product
- Add a new product
- Update an existing product
- Delete a product

## Technologies Used

- Vue.js: Frontend JavaScript framework for building user interfaces.
- Vuex: State management library for Vue.js applications.
- Axios: Promise-based HTTP client for making requests to the JSON Server.
- JSON Server: Fake REST API for backend simulation.

## Vue.js API Usage

### Options API

The Options API is used in one of the CRUD operations for managing products. It defines the Vue components using options such as `data`, `computed`, `methods`, `created`, etc., providing a clear and explicit structure for each component.

### Composition API

The Composition API is used in another CRUD operation for managing products. It offers a more modular and organized approach to managing component logic. With the Composition API, logic can be composed and reused across components, enhancing code readability and maintainability.

## Project Structure

- **OptionAPI**: Contains CRUD operations implemented using the Options API.
- **CompositionAPI**: Contains CRUD operations implemented using the Composition API.

## Getting Started

### Prerequisites

- Node.js and npm (or yarn) installed on your local machine.
- JSON Server installed globally: `npm install -g json-server`

### Installation

1. Clone this repository: `git clone https://github.com/engyahmed7/Vue_Products_Manager`
2. Navigate to the project directory: `cd Vue_Products_Manager`
3. Install dependencies: `npm install` or `yarn install`

### Usage

1. Start the JSON Server to simulate a backend: `json-server --watch db.json`
2. Start the Vue application: `npm run serve` or `yarn serve`
3. Open your browser and go to `http://localhost:8080` to access the application.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for any feature or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).

