import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import react,{ useEffect, useState } from "react";
import Title from "../Title";


const services = [
    { id: 1, image: "https://www.elhospital.com/documenta/imagenes/141032/Retos-en-el-sector-hospitalario-tras-la-pandemia-por-COVID-19-GR.jpg", title: "atencion" },
    { id: 2, image: "https://www.redaccionmedica.com/images/destacados/cirugia-plastica-es-la-especialidad-medica-mas-dada-a-los-casoplones--2196_620x368.jpg", title: "grupal" },
    { id: 1, image: "https://static.wixstatic.com/media/55c3a2_e31027de433e4b61a81060254e9851bc~mv2.png/v1/fill/w_512,h_341,al_c/55c3a2_e31027de433e4b61a81060254e9851bc~mv2.png", title: "consejos" },
];

export const ItemListContainer = () => {
    const  [data, setData] = useState([]);

    useEffect (() => {
const getData = new Promise(resolve => {
    setTimeout(() => {
        resolve(services);
    }, 3000);
});
getData.then(res => setData(res));

    }, [])
    
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <>
        <Title greeting="Dr Ari" />
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <ItemList data={data} />
        </>
        
     )
}

export default ItemListContainer;