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
    },                //action creatorも含まれる
    });
    
// console.log(cartSlice);

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;