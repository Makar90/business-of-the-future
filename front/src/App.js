//import './saas/main.scss';

import Header from './common/Header/Header';
import Main from './common/Main/Main';
import Footer from './common/Footer/Footer';
import useFeatch from 'react-fetch-hook'

import { updateUser_lastActivity, /* updateUser_lastUpdate */ } from './data/user.jsx';
function UserAction() {
    updateUser_lastActivity();
    //updateUser_lastUpdate();
}

function App() {
    const { isLoading, data, error } = useFeatch('http://localhost:1337/api/products?populate=*')
    //http://localhost:1337/api/products
    //http://localhost:1337/api/products?locale=en
    //http://localhost:1337/api/products?populate=
    console.log('Api request: get ProductsData; http://localhost:1337/api/products?populate=*');
    let ProductsData = data;

    /* function a() {
        window.location.reload(false);
    } */

    return (
        <div className='wrapper' onClick={UserAction}>
            {/* <button onClick={a}>
                window.location.reload(false);
            </button> */}
            <Header ProductsData={ProductsData} />
            {/* {isLoading ?
                <h2>It is Loading...</h2>
                :
                error ?
                    (
                        <>
                            <h2> ERROR API products </h2>
                            {console.log(error.error_message)}
                            {console.log('---' + error.message + '---' + error.name)}
                            < Main ProductsData={undefined} />
                        </>
                    )
                    :
                    < Main ProductsData={ProductsData} />
            } */}
            {isLoading && <h2>It is Loading...</h2>}
            {!isLoading && error && (
                <>
                    <h2 className='error'>It is Error...</h2>
                    <p className='error'>{error.message}  {error.name}</p>
                    <p className='error'>'Api request: ProductsData; .../api/products?populate=*'</p>
                    < Main ProductsData={ProductsData = data} />
                </>
            )}
            {!isLoading && !error && data === undefined && (
                <>
                    <h2 className='error'>ProductsData is empty</h2>
                    < Main ProductsData={ProductsData = data} />
                </>
            )}
            {!isLoading && !error && data !== undefined && < Main ProductsData={ProductsData = data} />}
            <Footer />
        </div >
    );
}

export default App;


