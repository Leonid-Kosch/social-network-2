import React from 'react';
import './Profile.css';
import Photo from '../../image/me.jpg';
import Posts from './posts/posts.js';

function Profile (props) {
    return(
        <div className="profile">
            <div className='about-me'>
                <img src={Photo}></img>
                <h3>
                    Леонид
                </h3>
            </div>
            <Posts postData={props.profilePage.postData} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;