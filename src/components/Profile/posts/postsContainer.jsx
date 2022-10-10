import React from 'react'
import { Connect } from "react-redux";
import Posts from "./posts";
import addPostActionCreater from '../../../state/addPost-reducer';
let mapStateToProps = (state) => {
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
const postContainer = Connect(mapStateToProps) (Posts);
export default postContainer;