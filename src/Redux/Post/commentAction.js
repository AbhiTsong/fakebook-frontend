import { PostActionTypes } from "./post.types";
import axios from "../../axios";

function addCommentStart() {
  return {
    type: PostActionTypes.COMMENT_START,
  };
}

function addCommentSuccess(comment) {
  return {
    type: PostActionTypes.COMMENT_SUCCESS,
    payload: comment,
  };
}

function addCommentFail(error) {
  return {
    type: PostActionTypes.COMMENT_FAIL,
    payload: error,
  };
}


function addCommentAction(){
 return function(dispatch){
   addCommentStart();
   try {
    let comment = axios.patch("/")
   } catch (error) {
    
   }
 }
}
