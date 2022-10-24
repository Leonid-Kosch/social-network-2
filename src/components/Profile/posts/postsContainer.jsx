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
            console.log(dispatch())
            dispatch(addPostActionCreater(postText))
        }
    }
};
const PostContainer = connect(mapStateToProps, mapDispatchToProps) (Posts);
export default PostContainer;