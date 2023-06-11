//import Menu from '../Menu/Menu';
import './header.scss';
import { Link } from 'react-router-dom';
import HeadersIcon from '../../components/HeadersIcon/HeadersIcon.jsx';
//import MenuButton from '../../components/MenuButton/MenuButton.jsx';

//import { useState } from "react";
//import { getAuth, onAuthStateChanged } from "firebase/auth";
import {getUser_sex} from '../../data/user.jsx';

export default function Header() {
    //let login_flag='false'; // logined_man logined_female
    /*const[userLogin, setUserLogin] = useState('false');

    function RenderAcciuntIco(){
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user && userLogin){ // !userInfo) {               
                //changeLogin_flag('logined_man');
                //console.log(login_flag);
                setUserLogin('logined_man');
                console.log('RenderAcciuntIco: man');
                
                // ...
            } else {
                //changeLogin_flag('false');
                setUserLogin('false');
                console.log('RenderAcciuntIco: error');
            }
        }); 
        //setUserLogin(getUser_sex());
        //console.log(getUser_sex());
    }*/

    /*function UpdateAccountIcon(){
        setTimeout( ()=>{
            RenderAcciuntIco();
            console.log('timeout');
        }, 0 );
    }
    UpdateAccountIcon();*/
    //RenderAcciuntIco();
    let userLogin2=getUser_sex();   


    function MenuOpenClose(){
        let menuOpenButton=document.querySelector('.header__middle-left-menuOpen');
        let menuCloseButton=document.querySelector('.header__middle-left-menuClose');
        let menu=document.querySelector('.menu');
        menuOpenButton.classList.toggle('header__middle-left-menuOpen--hidden');
        menuCloseButton.classList.toggle('header__middle-left-menuClose--hidden');
        menu.classList.toggle('menu--hidden');
        //alert('444');
    };

    function MenuClose(){
        let menuCloseButton=document.querySelector('.header__middle-left-menuOpen--hidden');
        if(menuCloseButton){
            MenuOpenClose();
        }
    }
    return(
        <header className="header">
            <div className="container header__container">
                <div className="header__top">
                    {/* <div class="features">
                        <a href="/delivery/" class="current bg1 feature">
                            <span data-text="Мы доставляем парфюмерию и косметику  бесплатно по Украине без предоплат и комиссий за перевод денег.">
                                <span>Бесплатная доставка по Украине!</span>
                            </span>
                        </a>
                        <span class="bg2 feature">
                            <span data-text="Вся представленная парфюмерия и косметика 100% оригинальная. MAKEUP авторизирован крупнейшими luxe-брендами.">
                                <span>100% Оригинальная продукция!</span>
                            </span>
                        </span>
                    </div>
                    <div class="actions">
                        <ul class="header-top-list">
                            <li class="header-top-list__item promoted"><a href="/actions/" class="header-top-list__link">Акции</a></li>
                            <li class="header-top-list__item"><a href="/delivery/" class="header-top-list__link">Доставка и Оплата</a></li>
                            <li class="header-top-list__item"><a href="/articles/" class="header-top-list__link">Статьи</a></li>
                            <li class="header-top-list__item"><a href="/about/" class="header-top-list__link">О магазине</a></li>
                        </ul>
                    </div>
                    <div class="lang-project">
                        <ul class="footer-lang">
                            <li class="footer-lang__item active">
                                <a href="/search/?q=" lang="ru" class="footer-lang__link">Рус</a>
                            </li>
                            <li class="footer-lang__item">
                                <a href="/ua/search/?q=" lang="uk" class="footer-lang__link">Укр</a>
                            </li>
                        </ul>
                        <div class="project-link">
                            <a href="https://club.makeup.com.ua/" class="header-top-list__link bc-about-link">Beauty Club</a>
                        </div>
                    </div> */}
                </div>
                <div className="header__middle">
                    <div className="header__middle-left">
                       {/*  <MenuButton/> */}                        
                        <HeadersIcon className='header__middle-left-menuOpen' 
                                    icon_name='Menu' 
                                    onClickFunc={MenuOpenClose} />                       
                        
                        <HeadersIcon className='header__middle-left-menuClose header__middle-left-menuClose--hidden' 
                                    icon_name='Menu close'
                                    onClickFunc={MenuOpenClose}/>
                        
                        <HeadersIcon icon_name='Search'
                                    link='/search'
                                    onClickFunc={MenuClose}/>

                        {/* <HeadersIcon icon=''/> */}
                    </div>                   

                    <div className="header__middle-center">
                        <Link to='/'>
                            <div className='header__logo' onClick={MenuClose}>
                                <img src="./pictures/logo.svg" alt="" width="100px" height="100px" title='Шопери'/>
                            </div>
                        </Link>
                    </div>
                    
                    <div className="header__middle-right">
                        {/* {accIco} */}
                       {/*  <HeadersIcon icon_name={userLogin==='logined_man'?    'Logined_man' : 
                                                userLogin==='logined_female'? 'Logined_female':
                                                                                'Login'} 
                                    link={      userLogin==='logined_man'?    '/account' : 
                                                userLogin==='logined_female'? '/account':
                                                                                '/login'}
                                    onClickFunc={MenuClose}/> */}

                        <HeadersIcon icon_name={userLogin2==='logined_man'?    'Logined_man' : 
                                                userLogin2==='logined_female'? 'Logined_female':
                                                                                'Login'} 
                                    link={      userLogin2==='logined_man'?    '/account' : 
                                                userLogin2==='logined_female'? '/account':
                                                                                '/login'}
                                    onClickFunc={MenuClose}/>


                        <HeadersIcon icon_name='Basket' 
                                    link='/shopongbin'
                                    onClickFunc={MenuClose}/>
                    </div>
                </div>

                {/* <div className="header__menu-buttom">
                    
                </div> */}

            </div>
        </header>
    )
};