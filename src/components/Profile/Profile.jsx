import React from 'react';
import './Profile.css';
import Photo from '../../image/me.jpg';
import postContainer from './posts/postsContainer';

function Profile () {
    return(
        <div className="profile">
            <div className='about-me'>
                <img src={Photo}></img>
                <h3>
                    Леонид
                </h3>
            </div>
            <postContainer />
        </div>
    );
}

export default Profile;