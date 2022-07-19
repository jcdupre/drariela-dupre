
import React, { useEffect, useState } from "react";

import ItemDetail from "../ItemDetail";
import { useParams } from 'react-router-dom'; 

const services = [
    { id: 1, price: 500, image: "https://www.elhospital.com/documenta/imagenes/141032/Retos-en-el-sector-hospitalario-tras-la-pandemia-por-COVID-19-GR.jpg", category: 'servicios', title: "atencion" },
    { id: 2, price: 250, image: "https://www.redaccionmedica.com/images/destacados/cirugia-plastica-es-la-especialidad-medica-mas-dada-a-los-casoplones--2196_620x368.jpg", category: 'servicios', title: "grupal" },
    { id: 1, price: 250, image: "https://static.wixstatic.com/media/55c3a2_e31027de433e4b61a81060254e9851bc~mv2.png/v1/fill/w_512,h_341,al_c/55c3a2_e31027de433e4b61a81060254e9851bc~mv2.png", category: 'consejos', title: "consejos" },
];

export const ItemDetailContainer =() => {
    const [data, setData] = useState ({});
    const { detalleId } = useParams();

    useEffect (() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(services);
            }, 3000);
        });

        getData.then(res => setData(res.find((services) => services.id === parseInt(detalleId))));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;