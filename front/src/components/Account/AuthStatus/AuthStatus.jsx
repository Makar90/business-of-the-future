import { getAuth, onAuthStateChanged } from "firebase/auth";
import {removeUser} from '../../../data/user.jsx';

export async function AuthStatus(){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('AuthStatus updated');
        } else {
            removeUser();
            console.log('AuthStatus false');
            //logg off
            //remove UserLovcalStorage
        }
    });
};