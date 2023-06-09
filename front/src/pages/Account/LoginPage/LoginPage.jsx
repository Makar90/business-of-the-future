

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

import {createUser} from '../../../data/user.jsx';

export default function Login(){

     //const dispatch = useDispatch();

     const navigate= useNavigate();

     

     const handleLoginFunc = (email, password) =>{
        let logimMessegeField = document.querySelector('.loginPage__message');
         const auth = getAuth();
         signInWithEmailAndPassword(auth, email, password)
             //.then (console.log)
             .then (({user}) => {
                /* if (user.emailVerified){
                    navigate ('/'); 
                    createUser(user);
                }else{
                    logimMessegeField.innerHTML = 'E-mail not verified'
                } */
                navigate ('/'); 
                createUser(user);         
             })
             //.catch (console.error)
             //.catch (() => alert('invalid user'))
             .catch ((Error)=>{
                //alert(Error);
                //console.log(Error.code);
                //console.log(Error.message);
                if(Error.code && Error.message){
                    logimMessegeField.innerHTML = //Error.code + '<br>'+ 
                                                Error.code.split('/')[1] + '<br>' +
                                                Error.message;
                }
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
            <h2 className='loginPage__title'>
                Login
            </h2>

            {/* <Login/> */}
            <Form
                handleTitle='Login'
                handleFunk={handleLoginFunc}
            />
            <p className='loginPage__registrate'>Ще незареєстровані? <Link to='/registrate'>Зареєструватись</Link></p>
            <p className='loginPage__message'></p>

            <button onClick={userSingOut}>
                Sing out
            </button>

            <button onClick={getLogined}>
                get user
            </button>
            
        </div>
    )
}
