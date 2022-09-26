import React from 'react';
import Message from "./Message/Message";
import Me from '../../../image/me.jpg'
import { sendMessageActionCreator } from '../../../state/sendMessage-reducer';


function Messages(props) { 
    let textarea; //создаем переменную в которую попадет textarea
    let setTextArea = (e) => { //когда фокусируемся на теге textarea 
        textarea = e.target; //в переменную textarea попадает тег textarea
    }
    let sendMessage = () => {
        let action = sendMessageActionCreator(textarea.value);
        props.dispatch(action);
        textarea.value = '';
        textarea.blur();
    };
    let sendMessageKey = (e) => {
        if (e.code === 'Enter' && !e.shiftKey) {
            if (textarea.value != '') {
                let action = sendMessageActionCreator(textarea.value);
                props.dispatch(action);
            } else{
                alert('Введите текст сообщения.');
            }
            textarea.value = '';
            textarea.blur();
        }
    };
    return (
        <div className="messages">
            {props.messageContent.map((e) => <Message img={e.img} name={e.name} id={e.id} text={e.text} />)}
            <div className="messages__managment">
                <textarea onFocus={setTextArea} onKeyDown={sendMessageKey} laceholder="Сообщение"></textarea>
                <button onClick={sendMessage}>⮋</button>
                
            </div>
        </div>

    );
}
export default Messages;