import Me from '../image/me.jpg'
let inicialState = {
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
};
export const sendMessageActionCreator = (messageText) => {
    return{
        type: 'SEND-MESSAGE',
        messageText: messageText
    }  
};
const sendMessageReducer = (profilePage = inicialState, action) => {
    if (action.type === 'SEND-MESSAGE') {
        let newMessage = {
            img: {},
            name: 'Leonid', 
            id: 5,
            text: action.messageText
        }
        profilePage.messageContent.push(newMessage);
    }
    return profilePage
} 
export default sendMessageReducer;