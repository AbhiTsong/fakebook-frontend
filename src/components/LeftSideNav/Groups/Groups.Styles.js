import styled from "styled-components";

const GroupsContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  height: 3rem;
  cursor: pointer;
  &:hover {
    background-color: rgb(188, 188, 207);
    border-radius: 10px;
  }

  @media screen and (max-width: 800px) {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    height: 1rem;
  }
`;

const GroupsContent = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

const GroupsIcon = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  padding-left: 0.5rem;
  @media screen and (max-width: 800px) {
    padding-left: 0;
  }
`;

const GroupTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const GroupText = styled.h5`
  margin: 0;
  margin-left: 1rem;

  @media screen and(max-width: 800px) {
    margin-left: 1rem;
    color: red;
  }
`;

export {
  GroupsContainer,
  GroupsContent,
  GroupsIcon,
  GroupTextContainer,
  GroupText,
};
