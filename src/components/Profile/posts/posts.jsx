import React from 'react';
import Post from "./post/post.js";

function Posts(props) {
    let textarea;
    let textareaInput = () => {
       textarea.style.height =textarea.scrollHeight + 'px';   
    };
    let textareaBLur = () => {
       textarea.style.height = 48 + 'px'
    };
    let textareaFocus = (e) => {
        textarea = e.target;
        console.log(textarea);
       textarea.style.height =textarea.scrollHeight + 'px';
    };
    let addPost = () => {
        if (textarea.value !== '') {
            let postText =textarea.value; //переменная в которую попал текст поста
            console.log(props.addPost)
            props.addPost(postText);
            console.log('ok')
           textarea.value = '';
        } else {
            alert('Сначала введите текст поста.');
        }
       textarea.blur();
    };
    let addPostKey = (e) => {
        if (e.code === 'Enter' && !e.shiftKey) {
            if (textarea.value !== '') {
                let postText =textarea.value; //переменная в которую попал текст поста
                props.addPost(postText);
               textarea.value = '';
            } else {
                alert('Сначала введите текст поста.');
            }
           textarea.blur();
        }
    }
    return (
        <div className='posts'>
            <div className='posts__head'>
                <h2>
                    Мои посты
                </h2>
                <div className='posts__input'>
                    <textarea onKeyDown={addPostKey}  onInput={textareaInput} onBlur={textareaBLur} onFocus={textareaFocus} placeholder='Введите текст' type='text' />
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