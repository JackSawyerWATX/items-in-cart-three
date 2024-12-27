# Shopping Cart App

A simple React application demonstrating the use of React Context API to manage and display a shopping cart. This project uses Bootstrap for styling to create a visually appealing and responsive layout.

## Features
- Displays the total number of items in the cart.
- Lists all items in the cart dynamically.
- Uses React Context API for state management.
- Styled using Bootstrap for a clean and responsive design.

## Technologies Used
- React
- Bootstrap
- JavaScript (ES6)

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/JackSawyerWATX/items-in-cart
   ```
2. Navigate to the project directory:
   ```bash
   cd items-in-cart
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000` in your web browser.

## Usage
1. The app initializes with a predefined list of items in the cart.
2. The `CartStatus` component dynamically displays the total number of items and a list of those items.
3. Add more items to the cart by modifying the `cart` state in the `App` component.

## Project Structure
```
shopping-cart-app/
├── public/             # Static assets
├── src/
│   ├── App.js          # Main app component
│   ├── index.js        # Entry point of the app
│   ├── components/     # Additional components (if added)
│   └── styles/         # Custom styles (optional)
└── package.json        # Project metadata and dependencies
```

## Code Overview
- **`CartContext`**: A React Context to manage the cart state.
- **`CartStatus`**: A functional component that consumes the `CartContext` and displays the cart status and list of items.
- **Bootstrap**: Integrated for responsive and modern styling.

## Future Improvements
- Add functionality to dynamically add/remove items from the cart.
- Implement a persistent state using local storage or a backend.
- Enhance styling with custom CSS or additional Bootstrap components.

## License
This project is licensed under the [MIT License](LICENSE).

---

Feel free to contribute by submitting issues or pull requests! 😊

## <===\/\/===> Happy Coding! <===/\/\===>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
