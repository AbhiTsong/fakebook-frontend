import React from "react";

// Custom Hook Import
import { useCalcInnerWidth } from "../../../hooks/useCalcInnerWidth";

import {
  GroupsContainer,
  GroupsContent,
  GroupsIcon,
  GroupTextContainer,
  GroupText,
} from "./Groups.Styles";

// Logo Img Import
import Group from ".././../../Assets/images/group.png";

function Groups() {
  let width = useCalcInnerWidth(window.innerWidth);
  return (
    <GroupsContainer width={width}>
      <GroupsContent>
        <GroupsIcon width={width} src={Group} />
      </GroupsContent>
      <GroupTextContainer>
        <GroupText>Groups</GroupText>
      </GroupTextContainer>
    </GroupsContainer>
  );
}

export default Groups;
