//import { Link } from "react-router-dom";
//import { header_icons } from "./data"
import './headerIcon.scss';

export default function HeaderIcon(props){  
    

    /* if(props.icon_name===''){
        return(
            <div className='header-icon header-icon--fake'>
                <svg></svg>
            </div>  
        )
    } else{
        let icon_element; 
        header_icons.forEach((item)=>{
            if(item.name.en===props.icon_name){
                icon_element=item;
            }                
        });
        if(icon_element!== undefined){ 
            function getName(lang){
                let localisationName;
                switch(lang){
                    case ('ua'):
                        localisationName= icon_element.name.ua;
                        break;
                    default:
                        localisationName= icon_element.name.en;
                }
                return localisationName;
            } 
            return(
                <Link to={props.route_link=== "" ? null : props.route_link}>
                    <div className='header-icon' title={getName('ua')}>
                        {props.icon_name==='' ? <svg></svg> : icon_element.icon}
                    </div>  
                </Link>
            )
        }else{
            return(<>error icon</>)
        }
    } */
    return (
        <div className='header-icon header-icon--fake'>
                <svg></svg>
        </div>
    )
}