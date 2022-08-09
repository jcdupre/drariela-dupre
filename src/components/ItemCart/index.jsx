import React from "react";
import { useCartContext } from '../../context/CartContext';
import './itemCart.css';

const ItemCart = ({ servicios }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className="itemCart">
            <img src={servicios.image} alt={servicios.title} />
            <div>
                <p>Título: {servicios.title}</p>
                <p>Cantidad: {servicios.quantity}</p>
                <p>Precio u.: {servicios.price}</p>
                <p>Subtotal: {servicios.quantity * servicios.price}</p>
                <button onClick={() => removeProduct(servicios.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart; 