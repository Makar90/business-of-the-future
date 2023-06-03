
import {Registrate} from '../../../components/Account/Registrate/Registrate.jsx';
import { Link } from 'react-router-dom';
export default function RegistratePage(){
    return(
        <div className="container"> 
            <h2>
                Registrate
            </h2>

            <Registrate/> 
            <p>Вже зараєстровані? <Link to='/login'>Залогінитись</Link></p>
        </div>
    )
}