import { getAuth, onAuthStateChanged } from "firebase/auth";
import {setUser_LastUpdate_LocalStorage} from '../../../data/usersLocalStorage.jsx';

export async function AuthStatus(userData_LocalStorage){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            //console.log('user')
            //console.log(user)
           if(userData_LocalStorage){
                setUser_LastUpdate_LocalStorage(userData_LocalStorage);
            }
        } else {
            console.log('logined user not found')
            //logg off
            //remove UserLovcalStorage
        }
    });
};