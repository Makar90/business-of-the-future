import {useNavigate} from 'react-router-dom';
import {LogOut} from '../../../components/Account/LogOut/LogOut.jsx';

import {temp_getUser} from '../../../data/user.jsx';


export default function AccountPage(){
    const navigate= useNavigate();

    function LoginOut(){
        navigate ('/');
        LogOut();
    }

    function getUserInfo(){
        let user = temp_getUser();
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