# Projects Live Link: 
## https://book-library-aa263.web.app


# Five  Bullet Points
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- my website feature  -->



## Features-1

- User registration with email and password
- User login and session management
- Password reset functionality for users
- Secure authentication using Firebase Authentication services
- Access control for protected routes based on user authentication status


## Features-2

- MongoDB database integration for storing book data and user information
- Express.js API routes for retrieving, adding, updating, and deleting books
- User-specific endpoints for managing reading lists
- Error handling and validation in API requests
- Efficient querying and indexing for optimized database performance



## Features-3

- User profile creation and management functionality
- Display of reading history, including completed books and reading progress
- User-friendly interfaces for updating profile information, preferences, and settings
- Seamless integration of Firebase Authentication and MongoDB for storing and retrieving user data
- Customization options for user experience, such as theme preferences and language settings


## Features-4
- Create (POST): Add new books to the database with title, author, genre, ISBN, and published year.
-Read (GET): Retrieve book details by ID, fetch all books, or search by author, providing a flexible querying system.
-Update (PUT): Modify existing book information, allowing updates to title, author, genre, ISBN, and published year.
-Delete (DELETE): Remove books from the database based on their unique ID, ensuring data cleanliness and organization.


## Features-5
-Token Generation: Upon user login, JWT tokens are generated and provided to clients.
-Token Verification: Incoming requests are validated to ensure they contain a valid and unexpired JWT token.
-Secure Authorization: Protects sensitive endpoints and routes by requiring a valid JWT token for access.
-Session Management: Tokens facilitate secure user sessions, ensuring authorized users can access their reading lists and profile settings.


## Features-6
-Scroll-Based Animations: Apply animations to elements as users scroll down the page, enhancing user experience.
-Customization: Configure animation duration, offset, and easing to create visually appealing effects.
-Multiple Animation Types: Choose from a variety of animations, such as fade, slide, zoom, or flip, for different elements.
-Axios HTTP Requests
-Description: Axios is utilized for making asynchronous HTTP requests to fetch data from APIs or backend services.
-Features:
-Simplified Syntax: Offers a simple and intuitive API for sending HTTP requests with fewer lines of code.
-Promise-Based: Utilizes promises, allowing seamless handling of asynchronous operations and response data.
-Error Handling: Provides robust error handling mechanisms, ensuring graceful degradation in case of network issues or server errors.

## 3.Installation:
#### firstly install server side 
<div class="mockup-code">
  <pre data-prefix="$"><code>npm init -y</code></pre>
  <pre data-prefix="$"><code>npm install express cors mongodb dotenv</code></pre>
  <pre data-prefix="$"><code>code .</code></pre>
</div>

then open vscode editor. we open package.json file and go to scripts then set "start" : "node index.js"
after that i create index.js file and writting server code here.

#### secondly install client side 
<div class="mockup-code">
  <pre data-prefix="$"><code>npm create vite@latest (name-of-your-project) -- --template react</code></pre>
  <pre data-prefix="$"><code>npm install react-router-dom localforage match-sorter sort-by</code></pre>
  <pre data-prefix="$"><code>npm install -D tailwindcss postcss autoprefixer</code></pre>
  <pre data-prefix="$"><code>npx tailwindcss init -p</code></pre>
  <pre data-prefix="$"><code>npm i -D daisyui@latest</code></pre>
  <pre data-prefix="$"><code>code .</code></pre>
</div>

after that i open vs code editor and setup tailwind css setup and daisyUi setup.then i start my projects main part.


## 4.Technologies Used:
- Html5
- CSS 
- Javascript (some) 
- TailwindCSS 
- React 
- React Router Dom
- Sweet alert
- React-Toast
- MongoDB
- Express Js
- Node Js
- **[aos](https://www.npmjs.com/package/aos)**: Animate on Scroll library.
- **[firebase](https://www.npmjs.com/package/firebase)**: Firebase SDK for JavaScript.
- **[localforage](https://www.npmjs.com/package/localforage)**: Offline storage library.
- **[match-sorter](https://www.npmjs.com/package/match-sorter)**: Simple, expected, and deterministic best-match sorting of an array in JavaScript.
- **[react](https://www.npmjs.com/package/react)**: A JavaScript library for building user interfaces.
- **[react-awesome-slider](https://www.npmjs.com/package/react-awesome-slider)**: A customizable and responsive image carousel component for React.
- **[react-dom](https://www.npmjs.com/package/react-dom)**: React package for working with the DOM.
- **[react-hot-toast](https://www.npmjs.com/package/react-hot-toast)**: Toast notifications for React.
- **[react-icons](https://www.npmjs.com/package/react-icons)**: Icon library for React.
- **[react-router-dom](https://www.npmjs.com/package/react-router-dom)**: DOM bindings for React Router.
- **[sort-by](https://www.npmjs.com/package/sort-by)**: Simple utility to sort an array of objects by one or more properties.
- **[sweetalert2](https://www.npmjs.com/package/sweetalert2)**: A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes.



