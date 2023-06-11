/* import {AuthStatus} from '../components/Account/AuthStatus/AuthStatus.jsx';

let userDataKey_LocalStorage='user';
let userLocalStoreUpdateTime = 1000*10//1000*60*60*4; */

/* export function getUser_LocalStorage(){
    let userData_LocalStorage = JSON.parse( localStorage.getItem(userDataKey_LocalStorage));
    if(!userData_LocalStorage) {
        return false;
    }
    
    if(userData_LocalStorage.lastUpdate + userLocalStoreUpdateTime <=Date.now()){
        AuthStatus(userData_LocalStorage);
        //userData_LocalStorage = JSON.parse( localStorage.getItem(userDataKey_LocalStorage));
    }
    
    userData_LocalStorage.lastActivity = Date.now();
    setUser_LocalStorage(userData_LocalStorage);
    console.log(`User_LocalStorage 'last activity' updated`);
    
    console.log(userData_LocalStorage);
    console.log('***');
    return userData_LocalStorage;
} */



/* function setUser_LocalStorage(userData_LocalStorage){
    localStorage.setItem(userDataKey_LocalStorage,JSON.stringify(userData_LocalStorage));
} */
