import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
//import Header from '../../../common/Header/Header.jsx';

export default function AccountPage(){
    const navigate= useNavigate();

    function userSingOut(){
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate ('/');
        }).catch((error) => {
            // An error happened.
        });

    }

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
            let userField=document.querySelector('.user');
            userField.innerHTML="not login";
        }
    });

    return(
        <div className="container">
            <h2>Account</h2>
            <button onClick={userSingOut}>
                Sing out
            </button>
            <p className='user'></p>
        </div>
    )
}