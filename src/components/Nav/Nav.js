import React from 'react';
import LocalStyles from './Nav.module.css';
import {Link} from 'react-router-dom';


function Nav () {
    return(
        <div className="nav">
            <Link to='/profile' className={LocalStyles.item}> Профиль</Link>
            <Link to='/dialogs'> Сообщения</Link>
            <Link to='/users'> Пользовтаели</Link>
        </div>
    );
}

export default Nav;