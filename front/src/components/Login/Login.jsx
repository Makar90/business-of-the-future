import {Form} from '../Account/Form/Form.jsx';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
//import {useDispatch} from 'react-redux';
//import {setUser} from '......store/slices/userSlices';

const Login= () => {
    //const dispatch = useDispatch();

    const navigate= useNavigate();

    const handleLoginFunc = (email, password) =>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            //.then (console.log)
            .then (({user}) => {
                console.log(user);
                navigate ('/');
            })
            //.catch (console.error)
            //.catch (() => alert('invalid user'))
            .catch ((Error)=>{alert(Error)})
    };

    return(
        <Form
            handleTitle='Login'
            handleFunk={handleLoginFunc}
        />
    )
}

export {Login};