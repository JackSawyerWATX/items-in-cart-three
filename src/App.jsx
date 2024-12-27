import { useState, useContext, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Create a context for the online shopping cart
const CartContext = createContext();

function CartStatus() {
  // TODO: Access the 'cart' from our CartContext and return a paragraph with "Items in Cart:" followed by the number of items
  const { cart: items } = useContext(CartContext);
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Shopping Cart</h2>
      <p className="alert alert-info">Items in Cart: {items.length}</p>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [cart] = useState([
    'apple',
    'bread',
    'milk',
    'eggs',
    'orange',
    'banana',
    'salt',
    'pepper',
    'maple syrup',
    'flour']);
  return (
    <CartContext.Provider value={{ cart }}>
      {/* TODO: Render the CartStatus component to display the cart status */}
      <CartStatus />
    </CartContext.Provider>
  );
}

export default App;