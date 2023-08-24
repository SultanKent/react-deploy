import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

const CartIcon = () => { 
  const count_products = useSelector((state) => state.bag.length);
  
  const open = () => {
    document.querySelector('.bag').style.display = 'flex';
    document.querySelector('body').style.overflowY = 'hidden';
  };
  
  const hideCounterRef = useRef(null);

  if (hideCounterRef.current) {
    hideCounterRef.current.style.display = count_products ? 'block' : 'block';
  }
  
  return (
    <div className="cart-icon" onClick={() => open()}>
      <span className="countIcon" ref={hideCounterRef}>
        {count_products === 1 ? '' : count_products}
      </span>
    </div>
  );
};

export default CartIcon;