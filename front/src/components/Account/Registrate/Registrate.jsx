import {Form} from '../Form/Form.jsx';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification  } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import {createUser} from '../../../data/user.jsx';
//import {useDispatch} from 'react-redux';
//import {setUser} from '......store/slices/userSlices';

const Registrate= () => {
    //const dispatch = useDispatch();

    const navigate= useNavigate();
    console.log(navigate);

    const handleRegistrateFunc = (email, password) =>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            //.then (console.log)
            .then (({user}) => {
                console.log(user);
                console.log(user.email);
                //navigate ('/login');
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        // Email verification sent!
                        // ...
                    });
                navigate ('/'); 
                createUser(user); 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    };

    return(
        <Form
            handleTitle='Registrate'
            handleFunk={handleRegistrateFunc}
        />
    )
}

export {Registrate}; 