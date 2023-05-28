import { Routes, Route} from 'react-router-dom';
import Menu from '../../components/Menu/Menu.jsx';

import './main.scss';
import Search from '../../pages/search/search.jsx';
import LoginPage from '../../pages/LoginPage/LoginPage.jsx';
import RegistratePage from '../../pages/RegistratePage/RegistratePage.jsx';
import ShopCart from '../../pages/shopcart/ShopCart.jsx';
//import Home from '../../pages/Home/Home';
import Shopers from '../../pages/Categories/shopers/Shopers';

export default function Main(){
    return(
        <main>
            <Menu/>
            <div className="container"> 
                <Routes>
                    <Route path='/searche' element={<Search />} /> 
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/registrate' element={<RegistratePage />} /> 
                    <Route path='/shopcart' element={<ShopCart />} />
                    {/* <Route path='/' element={<Home />} /> */}
                    <Route path='/' element={<Shopers />} />
                    <Route path='/shopers' element={<Shopers />} />
                </Routes>
            </div>            
        </main>
    )
}