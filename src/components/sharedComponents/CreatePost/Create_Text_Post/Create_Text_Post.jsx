import React from "react";
import { useSelector } from "react-redux";
// Styled Import

import { PostTextArea, WordLeftConteiner } from "./CreateTextPOst.styles";

// Utility Inports
import { countWord } from "../../../../utility/wordCount";

// Redux Import
import { signInSelector } from "../../../../Redux/Auth/SignIn/SignIn.Selector";
import { themeSelector } from "../../../../Redux/theme/theme.selector";

const WORD_LIMIT = 300;
function CreateTextPost(props) {
  const { light } = useSelector(themeSelector);
  const { value, onChange } = props;
  const {
    user: { firstName },
  } = useSelector(signInSelector);
  // const [values, setValues] = useForm({ description: "" });

  // Word Limit And Count
  let words = countWord(value, 500);
  let numberCount = WORD_LIMIT - words;
  return (
    <>
      {" "}
      <PostTextArea
        light={light}
        className="Post_Text_Area"
        name="description"
        placeholder={`What is on your mind, ${firstName}??`}
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
