import './saas/main.scss';

import Header from './common/Header/Header';
import Main from './common/Main/Main';
import Footer from './common/Footer/Footer';

function App() {
    return (
        <div className='wrapper'>
            <Header />
            <Main />
            <Footer />
            {/* <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/instruction' element={<Instruction />} />
                </Routes> */}
        </div>

    );
}

export default App;
