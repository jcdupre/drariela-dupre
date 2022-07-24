import ItemList from "../ItemList";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from "react";
import Title from "../Title";

import { useParams } from 'react-router-dom';


export const ItemListContainer = () => {
    const  [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect (() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'Servicios');
        if (categoriaId) {
        const queryFilter = query(queryCollection, where('Category', '==', categoriaId))
        getDocs(queryFilter)
            .then(res => setData(res.docs.map(servicio => ({ id: servicio.id, ...res.data() }))))
        } else {
        getDocs(queryCollection)
            .then(res => setData(res.docs.map(servicio => ({ id: servicio.id, ...res.data() }))))

        }

    }, [categoriaId])
    
    

    return (
        <>
        <Title greeting="Dr Ari" />
        <ItemList data={data} />
        </>
        
     )
}

export default ItemListContainer;