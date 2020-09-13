import React, { useEffect } from "react";

// Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPosts } from "../../../Redux/Post/fetchPosts.actions";
import { postSelector } from "../../../Redux/Post/post.selector";
import "./AllPosts.Styles.scss";

// Static Imports
import Logo from "../../../Assets/images/IMG-20190106-WA0001.jpg";
import Comment from "../../../Assets/images/comments.png";
import Share from "../../../Assets/images/share.png";

// Utility Function Import
import { browserRefresh } from "../../../utility/windowReload";

// Component Imports
import PhotoPost from "./PhotoPost/PhotoPost.Component";

function AllPostsComponent() {
  const dispatch = useDispatch();
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

  return (
    <div className="All_Post_Container">
      {allPost.allPosts.data &&
        allPost.allPosts.data
          .map((post, idx) => (
            <div key={post + idx} className="Single_Post_Container">
              {/* Pic Of The Post Creater */}
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
              {/* Pic Of The Post Creater */}
              <div className="Single_Post_Content">
                {post.photo !== null ? (
                  <PhotoPost post={post}/>
                ) : (
                  <div className="Center_Post_Text">
                    <p className="Single_Post_Text">{post.description}</p>
                  </div>
                )}
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
                  <span role="img" aria-label="Like">
                    &#128077; Like
                  </span>
                  <span className="Icon_Container">
                    <img
                      src={Comment}
                      className="Comment_Icon"
                      alt="Comment Icon"
                    />{" "}
                    Comment
                  </span>
                  <span className="Icon_Container">
                    <img src={Share} className="Share_Icon" alt="Share Icon" />{" "}
                    Share
                  </span>
                </div>
                <div className="All_Comments_Container">
                  <p>View 4 more comments</p>
                  <div className="Individual_Comment_Container">
                    <div className="Comments_Cotent">
                      <img
                        className="UserProfilePic"
                        src={Logo}
                        alt="Creator Profile Pic"
                      />
                      <div className="Comment">
                        <p className="Person">Person Name</p>
                        <p className="Person_Comment">
                          Yoo This Is Cool Bro.Yoo This Is Cool Bro.Yoo This Is
                          Cool Bro...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="Individual_Comment_Container">
                    <div className="Comments_Cotent">
                      <img
                        className="UserProfilePic"
                        src={Logo}
                        alt="Creator Profile Pic"
                      />
                      <div className="Comment">
                        <p className="Person">Person Name</p>
                        <p className="Person_Comment">
                          Yoo This Is Cool Bro.Yoo This Is Cool Bro.Yoo This Is
                          Cool Bro...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Add_Comment">
                  <img
                    className="LoggedIn_User"
                    src={Logo}
                    alt="Creator Profile Pic"
                  />
                  <input
                    placeholder="Write A Comment"
                    className="Comment_Input"
                  />
                </div>
              </div>
            </div>
          ))
          .reverse()}
    </div>
  );
}

export default AllPostsComponent;
