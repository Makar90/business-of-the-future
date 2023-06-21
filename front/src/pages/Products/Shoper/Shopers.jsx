//import { useState } from "react";
//import GetProducts from "../../../data/product.jsx";
//import useFeatch from 'react-fetch-hook'
import ProductCard from '../../../components/Product-card/ProductCard.jsx';
import './shopers.scss';

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
    
    console.log(props.ProductsData);


    return(
        <div className="container"> 
            {/* <h2>Shopers</h2> */}
            {props.ProductsData !== undefined &&
                <div className="products">
                    {props.ProductsData.data.map((item,index)=>( 
                        <ProductCard
                            key={item.id}
                            productid={item.id}
                            name={item.attributes.name}
                            imageUrl={item.attributes.images.data[0].attributes.formats.small?.url ? 
                                item.attributes.images.data[0].attributes.formats.small.url
                                : 
                                item.attributes.images.data[0].attributes.formats.thumbnail.url}
                            imageAlternativeText={item.attributes.images.data[0].attributes.alternativeText}
                            colore={item.attributes.colore}
                            price={item.attributes.price_hrn}
                            description={item.attributes.description}
                        />
                    ))}
                </div>
            }            
        </div>
        
    )
}