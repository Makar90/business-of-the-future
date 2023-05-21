import { Routes, Route} from 'react-router-dom';

import './main.scss';
import Search from '../../pages/search/search';
import Login from '../../pages/login/Login';
import ShopCart from '../../pages/shopcart/ShopCart';
import Home from '../../pages/home/Home';
import Shopers from '../../pages/Categories/shopers/Shopers';

export default function Main(){
    return(
        <main>
            <div className="container"> 
                <Shopers/> 
                <Routes>
                    <Route path='/search' element={<Search />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/shopcart' element={<ShopCart />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/shopers' element={<Shopers />} />
                </Routes>
            </div>            
        </main>
    )
}