import Me from '../image/me.jpg';
let state = { // база данных
    profilePage: {
        postData: [
            { text: 'Hello', id: 1 },
            { text: 'Bye', id: 2 },
            { text: 'Didnt ask', id: 3 },
            { text: 'Good', id: 4 }
        ],
    },
    dialogPage: {
        messageContent: [
            { img: { Me }, name: 'Leonid', id: 1, text: 'Hello' },
            { img: { Me }, name: 'Andrey', id: 2, text: 'No' },
            { img: { Me }, name: 'Shasha', id: 3, text: 'Yes' },
            { img: { Me }, name: 'Aleksey', id: 4, text: 'K' },
        ],
        dialogNames: [
            { name: 'elon mysk', id: 1 },
            { name: 'leonid', id: 2 },
            { name: 'donald trump', id: 3 },
            { name: 'tim kuk', id: 4 }
        ]
    }
} //конец баззы данных
let mainRender; // переменная в которую попадет функция для обрисовки / рендера  всей социальной сети.
export let addPost = (postText) => { // создем стрелочную функцию addPost которая принимает инфо. postText и экспортируем её. запускаем эту функцию в момент нажатия на кнопку опубликовать
    let newPost = { // объект в который попадает текст поста и его id.
        text: postText,
        id: 5,
    };
    state.profilePage.postData.push(newPost); //добавляем новый пост в раздел в баз. данных в postData
    mainRender(state); //запускаем функцию для прорисовки всей соц. сети и передаем обновленную баз. данных
};
 
export let subcribe = (opserver) => { // создаем функцию subscribe которая принимает информацию oppServer. запускаем эту функцию при обновлении страницы
    mainRender = opserver; //присваем mainRender opServer. 
};
export default state; -