import styled from "styled-components";

const GroupsContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  height: 3rem;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgb(188, 188, 207);
    border-radius: 10px;
  }
`;

const GroupsContent = styled.div`
  width: 1.5rem;
`;

const GroupsIcon = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  padding-left: 0.5rem;
`;

const GroupTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const GroupText = styled.h5`
  margin: 0;
  padding-left: 1.5rem;
`;

export {
  GroupsContainer,
  GroupsContent,
  GroupsIcon,
  GroupTextContainer,
  GroupText,
};
