import Me from '../image/me.jpg'
import addPostReducer from './addPost-reducer';
import sendMessageReducer from './sendMessage-reducer';
let store = {
    _state: { // база данных
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
    }, //конец баззы данных
    getState() { //функция которая возвращает state 
        return(
            this._state
        )
    },
    mainRender() { // функция в которую попадет функция для обрисовки / рендера  всей социальной сети.
        
    },
    dispatch (action) {
        this.getState().profilePage = addPostReducer(this.getState().profilePage, action);
        this.getState().dialogPage.messageContent = sendMessageReducer(action, this.getState().dialogPage.messageContent);
        this.mainRender(this.getState()); //запускаем функцию для прорисовки всей соц. сети и передаем обновленную баз. данных
    },
    subcribe (opserver) { // создаем функцию subscribe которая принимает информацию oppServer. запускаем эту функцию при обновлении страницы
        this.mainRender = opserver; //присваем mainRender opServer. 
    }
}

export default store; 