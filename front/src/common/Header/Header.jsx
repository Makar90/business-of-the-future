//import Menu from '../Menu/Menu';
import './header.scss';
import {header_icons_svg} from '../../data/icons';
import { Link } from 'react-router-dom';
//import Headericon from './Header_icon/Headericon.jsx';


export default function Header() {

    function Get_Login_Icon(login_flag){
        let icon;
        switch (login_flag){
            case ('logined_female'): 
                icon= header_icons_svg.logined_female;
                break;
            case ('logined_man'): 
                icon= header_icons_svg.logined_man;
                break;
            default:
                icon= header_icons_svg.login;
                break;
        }
        return icon;
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
                        {/* <Headericon icon_name="Search" route_link="/search"/>
                        <Headericon icon_name=""/>  */}
                        <Link to='/search'>
                            <div className="header__middle-right-login
                                            header__icon">                        
                                {header_icons_svg.search}
                            </div>
                        </Link>
                        <div className="header__middle-right-login
                                            header__icon header__icon--null">                        
                                <svg></svg>
                        </div>
                    </div>                   

                    <div className="header__middle-center">
                        <Link to='/'>
                            <div className='header__logo'>
                                <img src="./pictures/logo.svg" alt="" width="100px" height="100px" title='Шопери'/>
                            </div>
                        </Link>
                    </div>
                    
                    <div className="header__middle-right">
                        <Link to='/login'>
                            <div className="header__middle-right-login
                                            header__icon" 
                                title="Залогінитись">                        
                                {Get_Login_Icon('logined_female')}
                            </div>
                        </Link>
                        <Link to='/shopcart'>
                            <div className="header__middle-right-login
                                            header__icon">                        
                                {header_icons_svg.basket}
                            </div>
                        </Link>



                        {/* <div className="header__middle-right-login
                                        header__icon">                        
                            {header_icons_svg.logined_female}
                        </div>                       

                        <div className="header__middle-right-login
                                        header__icon">                        
                            {header_icons_svg.basket}
                        </div> */}
                    </div>
                </div>

                {/* <div className="header__buttom">
                    <Menu/>
                </div> */}

            </div>
        </header>
    )
}