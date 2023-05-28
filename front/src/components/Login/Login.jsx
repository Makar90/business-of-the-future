/* import {Form} from '../Form/Form.jsx';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//import {useDispatch} from 'react-redux';
//import {setUser} from '......store/slices/userSlices';

const Login= () => {
    //const dispatch = useDispatch();

    const handleLoginFunc = (email, password) =>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then (console.log)
            .catch (console.error)
    };

    return(
        <Form
            handleTitle='Login'
            handleFunk={handleLoginFunc}
        />
    )
}

export {Login}; */