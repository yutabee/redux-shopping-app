import React from 'react'
import { useSelector ,useDispatch } from 'react-redux';
import { CartItem } from './CartItem';
import { clearCart } from '../features/cart/CartSlice';

export const CartContainer = () => {

    const dispatch = useDispatch();
    const { amount, cartItems, total } = useSelector(store=>store.cart);//分割代入
    
    if (amount < 1) {  //商品が何も入っていない場合 
        return (
            <section className='cart'>
                <header>
                    <h2>買い物かご</h2>
                    <h4 className='empty-cart'>何も入っていません...</h4>
                </header>  
            </section>
        );
    }

    return (
        <section className='cart'>
            <header>
                <h2>買い物かご</h2>
            </header>
                <div>
                    {cartItems.map(item =>{
                        return <CartItem key={item.id} {...item} />;   //スプレッド構文でitemのpropsをすべて渡すことができる
                    })}
                </div>
                <footer>
                    <hr />
                    <div className="cart-total">
                        <h4>
                            合計 <span>{total}円</span>
                        </h4>
                    </div>
                    <button className='btn clear-btn' onClick={()=>dispatch(clearCart())}>全削除</button>
                </footer>
        </section>
    );
};
