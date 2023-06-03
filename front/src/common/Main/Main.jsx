import { Routes, Route} from 'react-router-dom';
import Menu from '../../components/Menu/Menu.jsx';

import './main.scss';
import SearchPage from '../../pages/SearchPage/SearchPage.jsx'
import LoginPage from '../../pages/Account/LoginPage/LoginPage.jsx';
import RegistratePage from '../../pages/Account/RegistratePage/RegistratePage.jsx';
import ShopongBin from '../../pages/ShopongBin/ShopongBin.jsx';
//import Home from '../../pages/Home/Home';
import Shopers from '../../pages/Products/Shoper/Shopers.jsx';

export default function Main(){
    return(
        <main>
            <Menu/>
            <div className="container"> 
                <Routes>
                    <Route path='/search' element={<SearchPage />} /> 
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/registrate' element={<RegistratePage />} /> 
                    <Route path='/shopongbin' element={<ShopongBin />} />
                    {/* <Route path='/' element={<Home />} />  */}
                    <Route path='/' element={<Shopers />} />
                    <Route path='/shopers' element={<Shopers />} />
                </Routes>
            </div>            
        </main>
    )
}