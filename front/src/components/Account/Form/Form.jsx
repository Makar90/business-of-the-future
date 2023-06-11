import { useState } from "react";
import './form.scss';

const Form = ({handleTitle, handleFunk}) =>{
    const[email, setEmail] = useState('');
    const[pass, setPass]=useState('');
    const[buttonDisabledFlag, setButtonDisabledFlag]=useState(true);

    //let buttonDisabledFlag = true;
    
    function checkEmail(value){
        setEmail(value);
        let errorField = document.querySelector('.errors');
        if(value !== 'test1@gmail.com'){
            errorField.innerHTML = '';
            setButtonDisabledFlag(false);
        }else{
            errorField.innerHTML = 'invalid Email - test1@gmail.com';
            setButtonDisabledFlag(true);
        }
    }

    return(
        <div className="form">
            <input
                type='email'
                value={email}
                onChange={(e) => checkEmail(e.target.value)}
                placeholder = 'email'
            />

            <input
                type='password'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder = 'pass'
            />

            <button disabled = {buttonDisabledFlag} onClick = {() => handleFunk(email, pass)}>
                {handleTitle}
            </button>
            <p className="errors"></p>
        </div>        
    )
};

export {Form}