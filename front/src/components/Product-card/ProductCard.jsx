import './productCard.scss';

export default function ProductCard(props){
    /* function textBR(text){
        text=text?.replace(/\n/g, ` <br/> ` );
        //text=text?.replace(/\n/g, `'<br>'`);
        //console.log(text);
        return text;
    } */

/*     function textBR2(){
        let elem = document.querySelector('.product__description2');
        console.log(elem);
        console.log(<p>123</p>)
        return <p> 000</p>
    } */
    
    return(
        <div className="product" productid={props.productid}>
            <h4 className="product__name">{props.name}</h4>
            <div className="product__image-frame" /* style={{backgroundImage:`url(http://localhost:1337${props.imageUrl})`}} */>
                <img className="product__image" 
                        src={`http://localhost:1337${props.imageUrl}`} 
                        alt={props.imageAlternativeText}>
                </img>
            </div>
            <div className="product__colore" style={{backgroundColor:props.colore}} ></div>
            <p className='product__price'>{props.price}</p>
            <p className="product__description">{props.description}</p> 
            {/* <p className="product__description">{textBR(props.description)}</p>  */}             
            {/* <p className="product__description2">{textBR2()}</p>  
            <p>123<br/>456</p>
            {textBR(props.description)}          */} 
        </div>
    );
}