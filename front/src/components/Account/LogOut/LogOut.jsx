import { getAuth, signOut } from "firebase/auth";
import {removeUser} from '../../../data/user.jsx';

export function LogOut(){

    const auth = getAuth();
    signOut(auth).then(() => {
        removeUser();
    }).catch((error) => {
        // An error happened.
    });
}