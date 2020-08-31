import { PostActionTypes } from "./post.types";
import axios from "../../axios";

function uploadPhotoStart() {
  return {
    type: PostActionTypes.CREATE_PHOTO_START,
  };
}

function uploadPhotoSuccess(photo) {
  return {
    type: PostActionTypes.CREATE_PHOTO_SUCCESS,
    payload: photo,
  };
}

function uploadPhotoFail(error) {
  return {
    type: PostActionTypes.CREATE_PHOTO_FAIL,
    payload: error,
  };
}

function uploadPhoto(props) {
  console.log("props ---- ", props);
  return async function (dispatch) {
    dispatch(uploadPhotoStart());
    try {
      let photoPost = await axios.post("/photo/create", props
        // headers: { "Content-Type": "multipart/form-data" },}
      );
      dispatch(uploadPhotoSuccess(photoPost));
    } catch (error) {
      if (error.response) {
        dispatch(uploadPhotoFail(error.response.data));
      }
    }
  };
}

export { uploadPhoto };
