import React from "react";
import { Link } from "react-router-dom";
function Dialogsitem (props) {
    return(
        <div className='dialog__user'>
            <Link className="item" to={'/Dialogs/${props.id}'}>{props.name}</Link>
        </div>
    );
}
export default Dialogsitem;