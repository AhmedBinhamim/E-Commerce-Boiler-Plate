import React from 'react';
import Navbar from '../Navbar/navbar';
import styles from './checkout.module.css';

const Checkout = () => {
  // Placeholder for cart items
  const cartItems = [
    { _id: '1', type: 'Arabica Coffee', quantity: 2, Price: 10.0 },
    { _id: '2', type: 'Espresso Coffee', quantity: 1, Price: 20.0 }
  ];

  // Placeholder for total amount calculation
  const totalAmount = cartItems.reduce((acc, item) => acc + item.Price * item.quantity, 0);

  const handleRemoveFromCart = (productId) => {
    // Implement the logic to remove from the cart
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Checkout</h1>
        <div className={styles.itemList}>
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <div key={item._id} className={styles.item}>
                <span>{item.type} x {item.quantity}</span>
                <span>${item.Price * item.quantity}</span>
                <button onClick={() => handleRemoveFromCart(item._id)} className={styles.removeButton}>Remove</button>
              </div>
            ))
          ) : (
            <div className={styles.emptyCart}>Your cart is empty.</div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className={styles.total}>
            <span>Total Amount:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        )}
        <button className={styles.checkoutButton}>Checkout</button>
      </div>
    </>
  );
};

export default Checkout;
