import React from "react";
import { useSelector } from "react-redux";

import {
  GroupsContainer,
  GroupsContent,
  GroupsIcon,
  GroupTextContainer,
  GroupText,
} from "./Groups.Styles";

// Logo Img Import
import Group from ".././../../Assets/images/group.png";
import { themeSelector } from "../../../Redux/theme/theme.selector";

function Groups() {
  let { light } = useSelector(themeSelector);
  return (
    <GroupsContainer light={light}>
      <GroupsContent>
        <GroupsIcon src={Group} />
      </GroupsContent>
      <GroupTextContainer>
        <GroupText light={light}>Groups</GroupText>
      </GroupTextContainer>
    </GroupsContainer>
  );
}

export default Groups;
