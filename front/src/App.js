//import './saas/main.scss';

import Header from './common/Header/Header';
import Main from './common/Main/Main';
import Footer from './common/Footer/Footer';
import { updateUser_lastActivity, /* updateUser_lastUpdate */ } from './data/user.jsx';

function App() {
    function UserAction() {
        updateUser_lastActivity();
        //updateUser_lastUpdate();
    }

    return (
        <div className='wrapper' onClick={UserAction}>
            <Header />
            <Main />
            <Footer />
            {/* <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/instruction' element={<Instruction />} />
                </Routes> */}
        </div >

    );
}

export default App;
