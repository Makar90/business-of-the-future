import { Link } from "react-router-dom";
import { header_icons } from "./data"

export default function HeaderIcon(props){
    let icon_element; 
    /* header_icons.for((item, index)=>{
        if(index===props.name){
            icon_element= item;
        }
    }) */
    console.log(icon_element);
    icon_element= header_icons.empty;
    return(
        <Link to={icon_element.route_link}>
            <div className="header__icon" title={icon_element.title.en}>
                {icon_element.icon}
            </div>  
        </Link> 
    )
}