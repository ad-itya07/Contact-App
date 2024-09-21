
# Contact App

A full-stack Contact Management application built with React, Vite, Node.js, Express, PostgreSQL, and Prisma. This app allows users to manage contacts with pagination, filtering, and sorting functionalities.

## Features

- **Pagination**: Navigate through a large number of contacts easily.
- **Responsive Design**: Works well on both desktop and mobile devices.

## Tech Stack

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **ORM**: Prisma

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- PostgreSQL
- npm (Node package manager)

### Clone the Repository

```bash
git clone https://github.com/ad-itya07/Contact-App.git
cd Contact-App
```

### Setup the Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up your PostgreSQL database and update the connection details in the `.env` file.

4. Run the migrations to create the database schema:

   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the backend server:

   ```bash
   npm start
   ```

### Setup the Frontend

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the frontend server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` (or the port specified in your terminal) to see the app in action.

## Usage

- View your contact list with pagination.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the developers and community for the tools and resources that made this project possible.
