import {useNavigate} from 'react-router-dom';
import {LogOut} from '../../../components/Account/LogOut/LogOut.jsx';

import { getUser_LocalStorage, 
        /* removeUser_LocalStorage  */
        } from "../../../data/usersLocalStorage";


export default function AccountPage(){
    const navigate= useNavigate();

    function LoginOut(){
        LogOut();
        navigate ('/');
        //window.location.reload(false);
    }

/*     const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            //const uid = user.uid;
            //console.log (uid);    
            //console.log (user);             
            
            let userField=document.querySelector('.account__userInfo');
            userField.innerHTML= user.email+'<br>'+user.uid;
            // ...
        } else {
            // User is signed out
            // ...
            let userField=document.querySelector('.account__userInfo');
            userField.innerHTML="not login";
        }
    }); */
    //console.log(getUser_LocalStorage())

    function getUserInfo(){
        let user = getUser_LocalStorage();
        if(user){
            document.querySelector('.account__userInfo').innerHTML =    
                user.user.email + '<br>'+
                user.user.uid + '<br>'+
                user.lastActivity + '<br>'+
                user.lastUpdate;
        }else{
            document.querySelector('.account__userInfo').innerHTML = "not login";
        }
    }

    return(
        <div className="container">
            <h2 className="account__title">Account</h2>

                <button onClick={LoginOut}>
                    Sing out2
                </button>

                <button onClick={getUserInfo}>
                    AuthStatus
                </button>

            <p className='account__userInfo'></p>
        </div>
    )
}