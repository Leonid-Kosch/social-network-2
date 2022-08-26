import './Header.css';
import Logo from '../../image/logo.svg';

function Header () {
    return(
        <div className="header">
            <a className='logo'>
                <img src={Logo}/>
            </a>
            <button className='lightTeme'>Сменить тему</button>
        </div>
    );
}

export default Header;