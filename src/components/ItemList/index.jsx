import Item from "../Item";
import React from "react";

const ItemList = ({data = []}) => {
    return (
        data.map(services => <Item key={services.id} info ={services} />)
    );
}

export default ItemList;