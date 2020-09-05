import React from "react";
import "./Create_Text_Post.styles.scss";


// Utility Inports
import { countWord } from "../../../../utility/wordCount";

const WORD_LIMIT = 300;
function CreateTextPost(props) {
  const {value, onChange} = props;
  // const [values, setValues] = useForm({ description: "" });

  

  // Word Limit And Count
  let words = countWord(value, 500);
  let numberCount = WORD_LIMIT - words;
  return (
    <>
      {" "}
      <textarea
        className="Post_Text_Area"
        name="description"
        placeholder="What is on your mind, Abhi??"
        type="text"
        value={value}
        onChange={onChange}
        maxLength={WORD_LIMIT}
      />
      <h6>Words Left {numberCount}</h6>
    </>
  );
}

export default CreateTextPost;
