/* import {Form} from '../Form/Form.jsx';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import {useDispatch} from 'react-redux';
//import {setUser} from '......store/slices/userSlices';

const Registrate= () => {
    //const dispatch = useDispatch();

    const handleRegistrateFunc = (email, password) =>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then (console.log)
            .catch (console.error)
    };

    return(
        <Form
            handleTitle='Registrate'
            handleFunk={handleRegistrateFunc}
        />
    )
}

export {Registrate}; */