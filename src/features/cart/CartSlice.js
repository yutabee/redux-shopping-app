import { createSlice } from "@reduxjs/toolkit";

//買い物かごの初期化
const initialState = {
    cartItems: [],          //cartitemlist
    amount: 4,              //ショッピングカートの商品の合計
    total:0,                //合計金額
};

const cartSlice = createSlice({
name: "cart",                 //useSelectorで指定する文字
initialState,                //初期状態
reducers:{},                //action creatorも含まれる
});

export default cartSlice.reducer;