import {Form} from '../Form/Form.jsx';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
//import {useDispatch} from 'react-redux';
//import {setUser} from '......store/slices/userSlices';

const Registrate= () => {
    //const dispatch = useDispatch();

    const navigate= useNavigate();

    const handleRegistrateFunc = (email, password) =>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            //.then (console.log)
            .then (({user}) => {
                console.log(user);
                navigate ('/login');
            })
            .catch (console.error)
    };

    return(
        <Form
            handleTitle='Registrate'
            handleFunk={handleRegistrateFunc}
        />
    )
}

export {Registrate}; 