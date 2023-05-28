import {Registrate} from '../../components/Registrate/Registrate.jsx';
import { Link } from 'react-router-dom';
export default function RegistratePage(){
    return(
        <>
            <h2>
                Registrate
            </h2>

            <Registrate/> 
            <p>Вже зараєстровані? <Link to='/login'>Залогінитись</Link></p>
        </>
    )
}