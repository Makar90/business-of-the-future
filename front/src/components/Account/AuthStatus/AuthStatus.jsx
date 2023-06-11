import { getAuth, onAuthStateChanged } from "firebase/auth";
//import {setUser_LastUpdate_LocalStorage} from '../../../data/usersLocalStorage.jsx';
import {createUser, removeUser} from '../../../data/user.jsx';

export async function AuthStatus(/* userData_LocalStorage */){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            createUser(user);
            console.log('AuthStatus updated');
           /* if(userData_LocalStorage){
                //setUser_LastUpdate_LocalStorage(userData_LocalStorage);
            } */
        } else {
            removeUser();
            console.log('AuthStatus false');
            //logg off
            //remove UserLovcalStorage
        }
    });
};