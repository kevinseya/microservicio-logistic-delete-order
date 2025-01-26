# microservicio-logistic-delete-order

# Node.js Project: Logistics Order 

This is a Node.js project that provides an API for managing logistics orders. The primary functionality of this project is to **delete orders** in a logistics system, allowing you to remove order details such as sender information, receiver information, package details, and shipping addresses from the database.

## Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MySQL](https://www.mysql.com/)

## Getting Started

### 1. Clone the repository (if applicable)
If the project is hosted on a Git repository, clone it to your local machine:
```bash
git clone https://github.com/kevinseya/microservicio-logistic-delete-order.git
```
2. Install Dependencies

Run the following command in the project directory to install the necessary Node.js modules:

```bash
npm install
```
3. Configure the Database

    Create a MySQL database named logistics_db.
    Update the database credentials in the file src/config/dbConfig.js:
```bash
const sequelize = new Sequelize('logistics_db', 'your_username', 'your_password', {
    host: 'localhost',
    dialect: 'mysql',
});
```
4. Run the Project

Start the server by running:

```bash
node src/app.js
```

The server will start on port 3002. Open your browser and navigate to:

```bash
http://localhost:3002
```
