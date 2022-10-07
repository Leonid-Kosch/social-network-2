import React from 'react';
import { addPostActionCreater } from '../../../state/addPost-reducer.js';
import Post from "./post/post.js";

function Posts(props) {
    let newPostText = React.createRef(); //переменная в которую попадает инпут 
    let textareaInput = () => {
        newPostText.current.style.height = newPostText.current.scrollHeight + 'px';   
    };
    let textareaBLur = () => {
        newPostText.current.style.height = 48 + 'px'
    };
    let textareaFocus = () => {
        newPostText.current.style.height = newPostText.current.scrollHeight + 'px';
    };
    let addPost = () => {
        if (newPostText.current.value !== '') {
            let postText = newPostText.current.value; //переменная в которую попал текст поста
            let action = addPostActionCreater(postText);
            props.dispatch(action);
            newPostText.current.value = '';
        } else {
            alert('Сначала введите текст поста.');
        }
        newPostText.current.blur();
    };
    let addPostKey = (e) => {
        if (e.code === 'Enter' && !e.shiftKey) {
            if (newPostText.current.value !== '') {
                let postText = newPostText.current.value; //переменная в которую попал текст поста
                let action = addPostActionCreater(postText);
                props.dispatch(action);
                newPostText.current.value = '';
            } else {
                alert('Сначала введите текст поста.');
            }
            newPostText.current.blur();
        }
    }
    return (
        <div className='posts'>
            <div className='posts__head'>
                <h2>
                    Мои посты
                </h2>
                <div className='posts__input'>
                    <textarea onKeyDown={addPostKey} ref={newPostText} onInput={textareaInput} onBlur={textareaBLur} onFocus={textareaFocus} placeholder='Введите текст' type='text' />
                    <button onClick={addPost}>Опубликовать</button>
                </div>
            </div>
            <div className='posts__list'>
                {props.postData.map((e) => <Post text={e.text} id={e.id} />)}
            </div>
        </div>
    );
}


export default Posts;