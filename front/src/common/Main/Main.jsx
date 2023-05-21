import { Routes, Route} from 'react-router-dom';

import './main.scss';
import Home from '../../pages/home/Home';
import Shopers from '../../pages/shopers/Shopers';

export default function Main(){
    return(
        <main>
            <div className="container">  
            <h2>Main</h2> 
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shopers' element={<Shopers />} />
                </Routes>
            </div>            
        </main>
    )
}