import React, { useEffect, useState } from "react";

// Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPosts } from "../../../Redux/Post/fetchPosts.actions";
import { postSelector } from "../../../Redux/Post/post.selector";
import "./AllPosts.Styles.scss";

// Static Imports
import Logo from "../../../Assets/images/IMG-20190106-WA0001.jpg";

// Utility Function Import
// import { browserRefresh } from "../../../utility/windowReload";
import config from "../../../config/config.json";

// Component Imports
import PhotoPost from "./PhotoPost/PhotoPost.Component";
import LikesContainer from "../LikesContainer/LikesContainer";
import LikeCommentsCount from "../../sharedComponents/LikeCommentsCount/LikeCommentsCount";
import CommentsContainer from "../../sharedComponents/CommentsContainer/CommentsContainer";
import AddComment from "../../sharedComponents/AddComment/AddComment";
import PostEditDrop from "./PostEditDrop/PostEditDrop";

function AllPostsComponent() {
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState(false);
  let allPost = useSelector(postSelector);

  useEffect(() => {
    dispatch(fetchAllPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (allPost.loading) {
    return "Loading...";
  }

  if (allPost.allPosts.data === "") {
    return "No Posts In The DataBase";
  }

  // Function For Waring The User If He Refreshses The Browser
  // browserRefresh();

  function handleEdit(e) {
    e.preventDefault();
    setShowEdit(!showEdit);
  }

  return (
    <div className="All_Post_Container">
      {allPost.allPosts.data &&
        allPost.allPosts.data
          .map((post, idx) => (
            <div key={post + idx} className="Single_Post_Container">
              <div className="Image_Input_Container">
                <img
                  className="UserProfilePic"
                  src={`${config.serverURL}/users/${post.owner}/avatar`}
                  alt="Creator Profile Pic"
                />

                <div className="Name_And_Dots_Container">
                  <h4 className="Creater_Name">{post.creator}</h4>
                  <div className="Edit_Container">
                    <h3 className="Three_Dots" onClick={handleEdit}>
                      ...
                    </h3>
                    {showEdit && <PostEditDrop id={post._id} />}
                  </div>
                </div>
              </div>
              {/* Pic Of The Post Creater */}
              <div className="Single_Post_Content">
                {post.photo !== null ? (
                  <PhotoPost post={post} />
                ) : (
                  <div className="Center_Post_Text">
                    <p className="Single_Post_Text">{post.description}</p>
                  </div>
                )}
              </div>
              <div className="Comments_Container">
                {/* Likes And Comments Count */}
                <LikeCommentsCount like={post.like} />
                {/* Like Comments Container */}
                <LikesContainer id={post._id} like={post.like} />

                <CommentsContainer comments={post.comments} />
                <AddComment id={post._id} />
              </div>
            </div>
          ))
          .reverse()}
    </div>
  );
}

export default AllPostsComponent;
