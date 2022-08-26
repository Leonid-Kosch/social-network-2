import Me from '../../../../image/me.jpg';
function Message (props) {
    return(
        <div className="message">
            <img src={props.Img}/>
            <div className="content">
                <h4>{props.name}</h4>
                <p> 
                    {props.text}
                </p>
            </div>
        </div>
    );
}
export default Message;