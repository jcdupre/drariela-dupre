import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from 'react-router-dom';
import { CartContext, useCartContext } from '../../context/CartContext';
import ItemCart from "../ItemCart";
import { useContext } from "react";
import { db } from "../../firebase/config";
import { useState } from "react";

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const {servicios} = useContext(CartContext)

    const [idOrder, setIdOrder] = useState("")

    const order = {
        buyer: {
            name: 'Juan Cruz',
            email: 'jjcdupre@gmail.com',
            phone: '1112121212',
            address: 'Avenida Siempreviva 1212'
        },
        items: cart.map(servicios => ({ id: servicios.id, tittle: servicios.tittle, price: servicios.price, quantity: servicios.quantity })),
        total: totalPrice(),

        }
        const handleClick = () => {
            const ordersCollection = collection(db, "orders");
            addDoc(ordersCollection, {
                order,
                items: [{ nombre:"service" }],
            })
            .then((result) =>{setIdOrder(result.id)
            })
    }
    
    
    if (cart.length === 0) {
        return (
            <>
            <p>No hay elementos en el carrito</p>
            <Link to='/'>Hacer compras</Link>
            </>
        )
    }

    return (
        <>
        {
            cart.map(servicios => <ItemCart key={servicios.id} servicios={servicios} />)
        }
        <p>
            total: {totalPrice()}
        </p>
        <button onClick={handleClick}>Generar orden</button>
        </>
    )
}

export default Cart