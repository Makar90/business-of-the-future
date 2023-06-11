import { getAuth, signOut } from "firebase/auth";
//import {useNavigate} from 'react-router-dom';
//import { removeUser_LocalStorage } from "../../../data/usersLocalStorage.jsx";
import {removeUser} from '../../../data/user.jsx';

export function LogOut(){
    //const navigate= useNavigate();

    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        //removeUser_LocalStorage();
        removeUser();
        //navigate ('/');
        //window.location.reload(false);
    }).catch((error) => {
        // An error happened.
    });
}

//export {LogOut}