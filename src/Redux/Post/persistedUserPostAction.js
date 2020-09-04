import { PostActionTypes } from "./post.types";

function persistUserTextPost(text) {
  return {
    type: PostActionTypes.PERSIST_USER_POST,
    payload: text,
  };
}

export  { persistUserTextPost };
