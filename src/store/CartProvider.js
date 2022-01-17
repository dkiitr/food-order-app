import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    items : [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === "ADD"){
        const updatedItems = state.items.concat(action.item);
        const updateTotalAmounts = state.totalAmount + action.item.price * action.item.amount;
        return {items: updatedItems,
            totalAmount:updateTotalAmounts
            
        }
    }
    if(action.type === "REMOVE") {

    }
    return defaultCartState;
} 

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);



    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: "ADD", item: item})
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({typr: "REMOVE", id: id})
    };
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
         {props.children}
         </CartContext.Provider>
       
            
       
    
}


export default CartProvider; 