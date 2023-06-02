# Laravel-React App Setup Guide

This guide provides step-by-step instructions on how to set up and run a Laravel-React app on your local machine using XAMPP and GitHub.

## Prerequisites

Before you begin, make sure you have the following installed:

- XAMPP (Apache and MySQL)
- PHP Composer
- Node.js (with npm)

## Instructions

1. **Clone the repository:** Start by cloning the Laravel-React app repository from GitHub to your local machine.

2. **Configure environment variables:** Rename the `.env.example` file in the root directory of the project to `.env`. Open the `.env` file and update the `DB_DATABASE` value to match your database name in XAMPP.

3. **Start XAMPP:** Open XAMPP and start the Apache and MySQL services. Create a new database in phpMyAdmin.

4. **Generate application key:** Open a terminal and navigate to the project's root directory. Run the following command to generate a unique application key:
   ```
   php artisan key:generate
   ```

5. **Run database migrations:** In the same terminal, run the following command to execute the database migrations and create the necessary tables:
   ```
   php artisan migrate
   ```

6. **Install dependencies:** Ensure you have npm and PHP Composer installed or updated. In the project's root directory, run the following commands to install the required dependencies:
   ```
   npm install
   composer install
   ```

7. **Configure .env for React:** If not already available, create a `.env` file inside the `es-dictionary` or `standalone-react` folder. Open the `.env` file and add the following line, replacing `http://localhost:8000` with your desired API base URL:
   ```
   VITE_API_BASE_URL=http://localhost:8000
   ```

8. **Build React assets:** Run the following command to build the React assets:
   ```
   npm run dev
   ```

9. **Start the Laravel server:** In a new terminal window, navigate to the project's root directory and run the following command to start the Laravel server:
   ```
   php artisan serve
   ```

Congratulations! You have successfully set up and configured the Laravel-React app. Access the application by visiting the URL provided by the Laravel server in your web browser.

If you encounter any issues, refer to the project's documentation or seek assistance from the project's maintainers.