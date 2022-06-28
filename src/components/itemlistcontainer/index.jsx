import ItemCount from "../ItemCount";
import react from "react";
import Title from "../Title";

export const ItemListContainer = () => {
    
    const onAdd = (quantity) => {
        console.log('Compraste ${quantity} unidades');
    }

    return (
        <>
        <title greeting="Juan" />
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </>
        
     )
}

export default ItemListContainer;