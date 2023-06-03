import {Login} from '../../../components/Account/Login/Login.jsx';
import { Link } from 'react-router-dom';

export default function Auth(){
    return(
        <>
            <h2>
                Login
            </h2>

            <Login/> 
            <p>Ще незареєстровані? <Link to='/registrate'>Зареєструватись</Link></p> 
        </>
    )
}