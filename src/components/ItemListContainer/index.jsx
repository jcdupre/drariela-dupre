import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from "../ItemList";
import Title from "../Title";
import { useParams } from 'react-router-dom';
import 'itemListContainer.css'


export const ItemListContainer = ({ texto }) => {
    const  [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect (() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'servicios');
        if (categoriaId) {
        const queryFilter = query(queryCollection, where('category', '==', categoriaId))
        getDocs(queryFilter)
            .then(res => setData(res.docs.map(servicios => ({ id: servicios.id, ...servicios.data() }))))
        } else {
        getDocs(queryCollection)
            .then(res => setData(res.docs.map(servicios => ({ id: servicios.id, ...servicios.data() }))))

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