// ACA SE COLOCA LA LOGICA DE NGRX

import { createReducer, on } from "@ngrx/store";
import { addProduct, removeAll, removeProduct } from "./cart.actions";
import { AppState } from "../app.state";

// import ProductModel

export const initialState: AppState = {
    products: [],
    grandTotal: 0
}

export const cartReducer = createReducer(
    initialState,
    

    // on(addProduct, (state, { product })=>({
    //     products: [...state.products, product],
    //     grandTotal: state.grandTotal + product.price
    // }))

    // on(removeProduct, (state, { productID, price })=>({
    //     products: state.products.filter(product => product.id !== productID),
    //     grandTotal: state.grandTotal - product.price
    // }))
)