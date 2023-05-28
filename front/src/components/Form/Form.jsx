import { useState } from "react";

const Form = ({handleTitle, handleFunk}) =>{
    const[email, setEmail] = useState('');
    const[pass, setPass]=useState('');

    return(
        <div>
            <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder = 'email'
            />

            <input
                type='password'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder = 'pass'
            />

            <button
                onClick = {() => handleFunk(email, pass)}>
                {handleTitle}
            </button>
        </div>
        
    )
};

export {Form}