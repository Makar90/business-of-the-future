import './headersIcon.scss';
import {GetIconDataByName} from '../../data/icons.jsx';
import { Link } from 'react-router-dom';

export default function HeadersIcon(props){
    let link=props.link;
    let icon_name=props.icon_name;
    let icon_data = GetIconDataByName(icon_name);
    console.log(icon_data);
    if(icon_name!==''){
        return(
            <Link to={link}>
                <div className="icon" /* header__middle-right-login header__icon */
                        title={icon_data.name.en}>                       
                    {icon_data.icon}
                </div>
            </Link>)
        
    }else{
        return(
            <div className="icon icon--null">{/* header__middle-right-login header__icon header__icon--null    */}               
                    <svg></svg>
            </div>)            
    }
}