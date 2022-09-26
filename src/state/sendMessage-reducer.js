export const sendMessageActionCreator = (messageText) => {
    return{
        type: 'SEND-MESSAGE',
        messageText: messageText
    }  
};
const sendMessageReducer = (action, messageContent) => {
    if (action.type == 'SEND-MESSAGE') {
        let newMessage = {
            img: {},
            name: 'Leonid', 
            id: 5,
            text: action.messageText
        }
        messageContent.push(newMessage);
    }
    return messageContent
} 
export default sendMessageReducer;