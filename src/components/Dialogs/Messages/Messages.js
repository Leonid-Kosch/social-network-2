import React from 'react';
import Message from "./Message/Message";
import Me from '../../../image/me.jpg'


function Messages(props) {
    return (
        <div className="messages">
            {props.messageContent.map((e) => <Message img={e.img} name={e.name} id={e.id} text={e.text} />)}
            <div className="messages__managment">
                <textarea placeholder="Сообщение"></textarea>
                <button><i class="fa-solid fa-angle-up"></i></button>
            </div>
        </div>

    );
}
export default Messages;