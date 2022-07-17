import React from 'react'
import { MinusIcon, PlusIcon } from '../HeroIcons';

export const CartItem = ({ id, img, title, price, amount }) => {  //スプレッド構文でデータを全て受け取る ここも分割代入で受け取る
  return (
    <>
    <article className='cart-item'>
        <img src={img} alt="" />
        <div>
            <h4>{title}</h4>
            <h4 className='item-price'>{price}円</h4>
            <button className='remove-btn'>削除</button>      
        </div>
        <div>
                  <button className='amount-btn'>
                      <PlusIcon />
                  </button>   
                  <p className='amount'>{amount}</p>
                   <button className='amount-btn'>
                      <MinusIcon />
                  </button>   
          
        </div>
    </article>
    </>
  );
};
