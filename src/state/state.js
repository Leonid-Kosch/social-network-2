import Me from '../image/me.jpg';
let state = {
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
}
let mainRender;
export let addPost = (postText) => {
    let newPost = {
        text: postText,
        id: 5,
    };
    state.profilePage.postData.push(newPost);
    debugger
    mainRender(state);
};

export let subcribe = (opserver) => {
    mainRender = opserver;
};
export default state; 