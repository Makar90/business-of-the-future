//import {header_icons_svg} from '../../data/icons.jsx';
import { Link } from 'react-router-dom';

export default function HeadersIcon(props){
    let icon=props.icon;
    let link=props.link;
    if(icon!==''){
        return(
            <Link to={link}>
                <div className="header__middle-right-login
                                header__icon">                        
                    {icon}
                </div>
            </Link>)
        
    }else{
        return(
            <div className="header__middle-right-login
                            header__icon header__icon--null">                        
                    <svg></svg>
            </div>)            
    }
}