import React, { useState, useContext } from "react";

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    console.log('carrito: ', cart);

    const totalPrice =() => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts =() => cart.reduce((acumulador, serviciosActual) => acumulador + serviciosActual.quantity, 0);

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(servicios => {
                return servicios.id === item.id ? { ...servicios, quantity: servicios.quantity + quantity } : servicios
            }));
            } else {
                setCart([...cart, { ...item, quantity }]);
            }
    }   

    const clearCart = () => setCart ([]);

    const isInCart = (id) => cart.find(servicios => servicios.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(servicios => servicios.id !== id));

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,

            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;