

import { Link } from 'react-router-dom';
//import {Login} from '../../../components/Account/Login/Login.jsx';

import {Form} from '../../../components/Account/Form/Form.jsx';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
//import {useDispatch} from 'react-redux';
//import {setUser} from '......store/slices/userSlices';

export default function Auth(){

     //const dispatch = useDispatch();

     const navigate= useNavigate();

     const handleLoginFunc = (email, password) =>{
         const auth = getAuth();
         signInWithEmailAndPassword(auth, email, password)
             //.then (console.log)
             .then (({user}) => {
                 console.log(user);
                 navigate ('/');
             })
             //.catch (console.error)
             //.catch (() => alert('invalid user'))
             .catch ((Error)=>{alert(Error)})
     };
    return(
        <>
            <h2>
                Login
            </h2>

            {/* <Login/> */}
            <Form
                handleTitle='Login'
                handleFunk={handleLoginFunc}
            />
            <p>Ще незареєстровані? <Link to='/registrate'>Зареєструватись</Link></p> 
        </>
    )
}
