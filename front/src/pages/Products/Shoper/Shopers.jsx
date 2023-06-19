import { useState } from "react";

export default function Shopers(){
    const [name, setName] = useState('')

    let products;

    fetch('http://localhost:1337/api/products')
    //http://localhost:1337/api/products?locale=en
        .then (data => data.json())
        .then (data => {
            products=data;
            console.log(data);
            setName(products?.data[0].attributes.Name);
        });

/*     products.map((item)=> {
        console.log(item);
    }) */
    console.log(products?.data);
    

    return(
        <div className="container"> 
            <h2>Shopers</h2>
            <div className="ProductCard">
                <h3 className="ProductCard__title">{name}</h3>
                <p className="ProductCard__description>"></p>
            </div>
        </div>
    )
}