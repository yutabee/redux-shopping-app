import React from 'react'
import { useSelector } from 'react-redux';
import { CartIcon } from '../HeroIcons';

export const Navbar = () => {

    // const amount = useSelector((store) => store.cart.amount);//取り出し方その１
    const {amount} = useSelector((store) => store.cart);//分割代入
    // console.log(amount);
  return (
    <>
    <nav>
        <div className="nav-center">
            <h3>Redux Shopping</h3>
            <div className="nav-container">
                      <CartIcon/>
                      <div className="amount-container">
                          <p className="total-amount">{amount}</p>
                  </div>      
            </div>                    
        </div>
    </nav>
    </>
  );
};
