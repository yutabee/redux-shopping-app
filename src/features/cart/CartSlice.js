import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

//買い物かごの初期化
const initialState = {
    cartItems: cartItems,          //cartitemlist
    amount: 4,              //ショッピングカートの商品の合計
    total:0,                //合計金額
};

    const cartSlice = createSlice({
    name: "cart",                 //useSelectorで指定する文字
    initialState,                //初期状態
        reducers: {
            clearCart:(state)=>{              //ここで設定したcrearCartという名前がアクションの名前になる
                // state.cartItems = [];
                return {
                    cartItems: [],
                    amount: 0,
                    total: 0,
                };  //initialStateを空にする
            },
            removeItem: (state, action) => {
                // console.log(action);
                const itemId = action.payload;
                state.cartItems = state.cartItems.filter(item=>item.id!==itemId);
            },
            increase: (state, action) => {
                const cartItem = state.cartItems.find((item) => item.id === action.payload);
                cartItem.amount = cartItem.amount + 1;
            },
            decrease: (state, action) => {
                const cartItem = state.cartItems.find((item) => item.id === action.payload);
                cartItem.amount = cartItem.amount - 1;
            },
            calculateTotals: (state) => { //いつ発火させるの？       
                let amount = 0;
                let total = 0;
                state.cartItems.forEach((item) => {
                    amount += item.amount;
                    total += item.amount * item.price;
                });
                state.amount = amount;
                state.total = total;
            }
        },              //action creatorも含まれる
    });
    
// console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease,calculateTotals} = cartSlice.actions;
export default cartSlice.reducer;