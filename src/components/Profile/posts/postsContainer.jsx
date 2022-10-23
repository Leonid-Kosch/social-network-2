import React from 'react'
import { connect } from "react-redux";
import Posts from "./posts.jsx";
import addPostActionCreater from '../../../state/addPost-reducer';
let mapStateToProps = (state) => {
    debugger
    console.log(state); 
    return {
        postData: state.profilePage.postData
    }     
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => {
            dispatch(addPostActionCreater(postText))
        }
    }
};
const postContainer = connect(mapStateToProps, mapDispatchToProps) (Posts);
console.log(postContainer)
export default postContainer;