let inicialState = {
    postData: [
        { text: 'Hello', id: 1 },
        { text: 'Bye', id: 2 },
        { text: 'Didnt ask', id: 3 },
        { text: 'Good', id: 4 }
    ]
}
export const addPostActionCreater = (postText) => {
    return{
        type: 'ADD-POST',
        postText: postText
    }
};
const addPostReducer = (profilePage = inicialState, action) => {
    
    if (action.type == 'ADD-POST') {
        let newPost = { // объект в который попадает текст поста и его id.
            text: action.postText,
            id: 5,
        };
        profilePage.postData.splice(0, 0, newPost); //вносим изменения в profilePage пост в раздел в баз. данных в postData
        debugger
        return profilePage; // возвращаем измененый profilePage в state
    }
    else{
        return profilePage //возвращаем profilePage без изменений 
    }
} 
export default addPostReducer