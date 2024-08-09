// ACA VAN LAS INSTRUCCIONES 

import { createAction, props } from "@ngrx/store";
// PRODUCT MODEL

export const addProduct = createAction(
    "[Cards Component] Add product",
    props<{ product: string  }>()
)

export const removeProduct = createAction(
    "[Navbar Component] Remove product",
    props<{ productID: number }>()
)

export const removeAll = createAction(
    "[Navbar Component] Remove all products",
)