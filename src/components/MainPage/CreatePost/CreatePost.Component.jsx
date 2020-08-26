import React from "react";
import "./CreatePost.Styles.scss";

// Shared Compoent
import FormInput from "../../sharedComponents/FormInput/FormInput.Component";
import Logo from "../../../Assets/images/IMG-20190106-WA0001.jpg";
import CustomButton from "../../sharedComponents/Button.Component/Button.Component";

function CreatePostComponent() {
  console.log("Create Post Compoent being Called")
  return (
    <div className="CreatePostContainer">
      <div>
        <img className="UserProfilePic" src={Logo} alt="Monkey" />
      </div>
      <form>
        <textarea
          className="Post_Text_Area"
          name="firstName"
          placeholder="What is on your mind, Abhi??"
          type="text"
          // value={values.firstName}
          // onChange={handleValues}
        />
        <div></div>
        <div className="Add_Post_Container">
          <span>Add to your post</span>
          <span>
            <i>1</i>
            <i>2</i>
            <i>3</i>
            <i>4</i>
            <i>5</i>
            <i>...</i>
          </span>
        </div>
        <CustomButton
          className="Post_Button"
          buttonClick={() => console.log("I got Clicked")}
        >
          Post
        </CustomButton>
      </form>
    </div>
  );
}

export default CreatePostComponent;
