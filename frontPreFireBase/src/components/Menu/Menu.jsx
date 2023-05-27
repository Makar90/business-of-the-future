import './menu.scss';

export default function Menu (){
    return(        
        <nav className="menu menu--hidden">
            <div className='container'>
                <ul>
                    <li>
                        {/* <a href="#">alert</a> */}
                        <p>Item menu1</p>
                    </li>
                    <li>
                        {/* <a href="#">alert</a> */}
                        <p>Item menu2</p>
                    </li>
                </ul>
            </div>
        </nav>
    );
} 