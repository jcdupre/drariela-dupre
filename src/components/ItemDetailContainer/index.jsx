
import React, { useEffect, useState } from "react";

import ItemDetail from "../ItemDetail";

const services = { id: 1, image: "https://www.elhospital.com/documenta/imagenes/141032/Retos-en-el-sector-hospitalario-tras-la-pandemia-por-COVID-19-GR.jpg", title: "atencion" };



export const ItemDetailContainer =() => {
    const [data, setData] = useState ({});

    useEffect (() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(services);
            }, 3000);
        });

        getData.then(res => setData(res));
    }, [])


    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;