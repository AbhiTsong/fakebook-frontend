import React, { useEffect, useState } from "react";

// Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPosts } from "../../../Redux/Post/fetchPosts.actions";
import { postSelector } from "../../../Redux/Post/post.selector";
import "./AllPosts.Styles.scss";

// Static Imports
import Logo from "../../../Assets/images/IMG-20190106-WA0001.jpg";

function AllPostsComponent() {
  const dispatch = useDispatch();
  let allPost = useSelector(postSelector);
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    dispatch(fetchAllPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!allPost.loading && allPost.allPosts) {
      setPosts(allPost.allPosts.data.reverse());
    }
  }, []);

  return (
    <div className="All_Post_Container">
      {posts.map((post) => (
        <div key={post.length} className="Single_Post_Container">
          <div className="Image_Input_Container">
            <img
              className="UserProfilePic"
              src={Logo}
              alt="Creator Profile Pic"
            />

            <div className="Name_And_Dots_Container">
              <h6>Creator Name</h6>
              <h3>...</h3>
            </div>
          </div>
          <div className="Single_Post_Content">
            <p className="Single_Post_Text">{post.description}</p>
          </div>
          <div className="Comments_Container">
            <div className="Reaction_Count">
              <span role="img" aria-label="Post Reaction">
                &#128525;
              </span>
              <div className="Comment_People">
                <span>Freind 1, Friend 2</span>
                <span>9 Comments</span>
              </div>
            </div>
            <div className="Like_Comment_Icons_Container">
              <span role="img" aria-label="Like">&#128077; Like</span>
              <span>Comment</span>
              <span>Share</span>
            </div>
            <div>Actual Comment Show Text</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllPostsComponent;
