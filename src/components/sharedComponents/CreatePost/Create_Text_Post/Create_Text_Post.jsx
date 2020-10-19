import React from "react";

// Styled Import

import { PostTextArea, WordLeftConteiner } from "./CreateTextPOst.styles";

// Utility Inports
import { countWord } from "../../../../utility/wordCount";

const WORD_LIMIT = 300;
function CreateTextPost(props) {
  const { value, onChange } = props;
  // const [values, setValues] = useForm({ description: "" });

  // Word Limit And Count
  let words = countWord(value, 500);
  let numberCount = WORD_LIMIT - words;
  return (
    <>
      {" "}
      <PostTextArea
        className="Post_Text_Area"
        name="description"
        placeholder="What is on your mind, Abhi??"
        type="text"
        value={value}
        onChange={onChange}
        maxLength={WORD_LIMIT}
      />
      <WordLeftConteiner>Words Left {numberCount}</WordLeftConteiner>
    </>
  );
}

export default CreateTextPost;
