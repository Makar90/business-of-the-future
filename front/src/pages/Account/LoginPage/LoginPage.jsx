

import { Link } from 'react-router-dom';
//import {Login} from '../../../components/Account/Login/Login.jsx';

import {Form} from '../../../components/Account/Form/Form.jsx';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
//import {useDispatch} from 'react-redux';
//import {setUser} from '......store/slices/userSlices';
import './loginPage.scss';

import {onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

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
             .catch ((Error)=>{
                //alert(Error);
                console.log(Error.code);
                console.log(Error.message);
                let errorField=document.querySelector('.error');
                errorField.innerHTML=Error.code
                //errorField.innerHTML=Error.split(':')[3];
            })
     };

    function getLogined(){
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                console.log (uid);
                let userField=document.querySelector('.user');
                userField.innerHTML=uid;
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }

    function userSingOut(){
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }


    return(
        <div className="container loginPage__container"> 
            <h2>
                Login
            </h2>

            {/* <Login/> */}
            <Form
                handleTitle='Login'
                handleFunk={handleLoginFunc}
            />
            <p>Ще незареєстровані? <Link to='/registrate'>Зареєструватись</Link></p>

            <button onClick={userSingOut}>
                Sing out
            </button>

            <button onClick={getLogined}>
                get user
            </button>
            <p className='error'></p>
            <p className='user'></p>
        </div>
    )
}
