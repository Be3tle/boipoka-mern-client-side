# boipoka (MERN Stack)

This website is an online library built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to explore and borrow books from various genres, including history, fiction, comedy, and romance.

## Live Link

[boipoka](https://boip0ka.web.app/)

## Backend Repository

[Backend Repository](https://github.com/Be3tle/boipoka-mern-server-side.git)

## Features

- **User Authentication**: Users can sign up, log in, and manage their accounts securely using Firebase Authentication.
- **Browse Books**: Users can explore a wide range of books categorized by genre.
- **Book Details**: Users can view detailed information about each book, including title, author, genre, and availability status.
- **Borrow Books**: Authenticated users can borrow books if they are available.
- **Return Books**: Users can return borrowed books when they are finished reading them.
- **User Dashboard**: Users have access to a dashboard where they can manage their borrowed books.
- **Search Functionality**: Users can now search for books by title or author name on the "All Books" page, making it easier to find specific books of interest.

## Technologies Used

### Frontend:

- **React.js:** Used for building dynamic and responsive user interfaces.
- **Tailwind CSS:** Employed for efficient and responsive styling.

### Backend:

- **Node.js with Express.js:** Used to build the server, facilitating the creation of robust and scalable APIs.
- **MongoDB:** Implemented as the database to store book information and user data.
- **Firebase Authentication with JWT (JSON Web Token):** Utilized for secure user authentication and authorization. Firebase Authentication handles user sign-up, login, and JWTs are used for secure communication between the client and server.

### HTTP Requests:

- **Axios:** Used for making HTTP requests from the frontend to the backend, facilitating seamless communication between the client and server.

## Getting Started

To run the boipoka project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Be3tle/boipoka-mern-client-side.git
   ```

2. Navigate to the project directory:

   ```bash
   cd boipoka-mern-client-side
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the boipoka app:

   ```bash
   npm run dev
   ```

   This will start the development server for the frontend.

5. Open your browser and visit [http://localhost:5173/](http://localhost:5173/) or

   ```bash
   o
   ```

to explore and enjoy the boipoka online library.

Feel free to explore the website and enjoy borrowing books from various genres! If you encounter any issues or have suggestions for improvements, please don't hesitate to contribute. Happy reading!
