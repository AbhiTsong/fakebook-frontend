import React from "react";

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
  return (
    <GroupsContainer>
      <GroupsContent>
        <GroupsIcon src={Group} />
      </GroupsContent>
      <GroupTextContainer>
        <GroupText>Groups yoo</GroupText>
      </GroupTextContainer>
    </GroupsContainer>
  );
}

export default Groups;
