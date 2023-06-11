let userDataKey='user';
//export let userLogin = false;
//let userLocalStoreUpdateTime = 1000*10//1000*60*60*4;

//base user function
export function createUser(user, lastActivity, lastUpdate){
    //setUserLoginData(value);
    let userData={
        user: user,
        lastActivity : lastActivity === undefined ? Date.now() : lastActivity,
        lastUpdate : lastUpdate === undefined ? Date.now() : lastUpdate,        
    }
    localStorage.setItem(userDataKey,JSON.stringify(userData));
    console.log('createUser: OK');
    window.location.reload(false);
}
export function removeUser(){
    localStorage.removeItem(userDataKey);
    console.log('removeUser: OK');
    window.location.reload(false);
}
//---------------------------

//internal user function
function checkUser(){
    let userData = JSON.parse(localStorage.getItem(userDataKey));
    if(userData){
        return true;
    }else{
        //window.location.reload(false);
        return false;
    }
}
function getUser(){
    return JSON.parse(localStorage.getItem(userDataKey));
}
function setUser(userData){
    localStorage.setItem(userDataKey,JSON.stringify(userData));
}
//---------------------------

//control user function
export function updateUser_lastActivity(){
    if(!checkUser()){
        console.log('USER updateUser_lastActivity: error');
        return false;
    }
    let userData = getUser()
    userData.lastActivity = Date.now();
    setUser(userData)
    console.log('USER updateUser_lastActivity: OK');
}
export function updateUser_lastUpdate(){
    if(!checkUser()){
        console.log('updateUser_lastUpdate: error');
        return false;
    }
    let userData = JSON.parse(localStorage.getItem(userDataKey));
    userData.lastUpdate = Date.now();
    localStorage.setItem(userDataKey,JSON.stringify(userData));
    console.log('USER updateUser_lastUpdate: OK');
}
export function getUser_sex(){
    if(!checkUser()){
        console.log('USER getUser_sex: error');
        return false;
    }
    console.log('USER getUser_sex: OK');
    return 'logined_man';
}

export function temp_getUser(){
    return getUser();
}






/*
export function setUser_LastUpdate_LocalStorage(userData_LocalStorage){
    userData_LocalStorage.lastUpdate = Date.now();
    setUser_LocalStorage(userData_LocalStorage);
    console.log(`User_LocalStorage 'last Update' updated`);
}

export function getUser_LocalStorage(){
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
}



function setUser_LocalStorage(userData_LocalStorage){
    localStorage.setItem(userDataKey_LocalStorage,JSON.stringify(userData_LocalStorage));
}*/
