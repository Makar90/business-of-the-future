//import { useState } from "react";
//import GetProducts from "../../../data/product.jsx";
//import useFeatch from 'react-fetch-hook'

export default function Shopers(props){  
/*     const{ isLoading, data} = useFeatch('http://localhost:1337/api/products?populate=*')
        //http://localhost:1337/api/products
        //http://localhost:1337/api/products?locale=en
        //http://localhost:1337/api/products?populate=

    let Products = data?.data.map((item,index)=>(
        <div className="ProductCard">
            <h3 className="ProductCard__title">{item.attributes.name}</h3>
            <p className="ProductCard__description>">{item.attributes.description}</p>
            <img className="images" src={`http://localhost:1337${item.attributes.images.data[0].attributes.url}`} alt="plane"></img>  
        </div> 
    ));  

    return(
        isLoading ? '<h1>Is Loading...</h1>'
        :
        <div className="container"> 
            <h2>Shopers</h2>
            {Products}
        </div>
    ) */


    //const[w,setW] = useState(GetProducts());
    let dataX = props.ProductsData;
    //console.log(dataX);

    return(
        <div className="container"> 
            <h2>Shopers</h2>
            <h2>{dataX.data[0].attributes.description}</h2>
        </div>
        
    )
}