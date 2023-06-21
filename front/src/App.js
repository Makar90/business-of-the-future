//import './saas/main.scss';

import Header from './common/Header/Header';
import Main from './common/Main/Main';
import Footer from './common/Footer/Footer';
import useFeatch from 'react-fetch-hook'
import { updateUser_lastActivity, /* updateUser_lastUpdate */ } from './data/user.jsx';

function App() {
    const { isLoading, data } = useFeatch('http://localhost:1337/api/products?populate=*')
    //http://localhost:1337/api/products
    //http://localhost:1337/api/products?locale=en
    //http://localhost:1337/api/products?populate=
    let ProductsData = data;
    console.log('Api request: get ProductsData; http://localhost:1337/api/products?populate=*');


    function UserAction() {
        updateUser_lastActivity();
        //updateUser_lastUpdate();
    }

    /* function a() {
        window.location.reload(false);
    } */

    return (
        <div className='wrapper' onClick={UserAction}>
            {/* <button onClick={a}>
                window.location.reload(false);
            </button> */}
            <Header ProductsData={ProductsData} />
            {isLoading ?
                '<h1>Is Loading...</h1>'
                :
                <Main ProductsData={ProductsData} />
            }
            <Footer />
        </div >
    );
}

export default App;


