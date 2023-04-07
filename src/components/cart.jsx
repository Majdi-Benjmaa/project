import React, { useState, useEffect } from 'react';
import Card from './card'
import { getCart } from '../helpers/cart'



const Cart = () => {
  const [items, setItems] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const getTotal = () => {
    return items.reduce((currentValue, nextValue) => {
      return Math.round(currentValue + nextValue.count * nextValue.price);
    }, 0);
  };

  const showItems = items => {
    return (
      <div>
        <div className="row">
          {items.map(product => (
            <div className="col-4" key={product._id}>
              <Card
                product={product}
                showAddToCartButton={false}
                showRemoveProductButton={true}
                cartUpdate={true}
                setRender={setRender}
                render={render}
              />
            </div>
          ))}{' '}
        </div>
      </div>
    );
  };

  const noItemsMessage = () => (
    <div>
      <h2>Your cart is currently empty.</h2>
      
    </div>
  );

  return (
    <div className="text-center m-3">
      <div className="">
        <h1 className="title p-2">Your cart</h1>
        <Checkout products={items} setRender={setRender} render={render} />
      </div>

      <div className="mt-4">
        {items.length > 0 ? showItems(items) : noItemsMessage()}
        <h2>Total: ${getTotal()}</h2>
      </div>
    </div>
  );
};

export default Cart;
