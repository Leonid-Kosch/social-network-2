import Photo from '../../../../image/me.jpg';

function Post (props) {
    return(
        <div className="post">
            <div className='post__head'>
                <img src={Photo}></img>
                <span>Leonid</span>
            </div>
            <p>{props.text}</p>
        </div>
    );
}
export default Post;