import styled from "styled-components";

const PostEditOptions = styled.div`
  position: absolute;
  background-color: white;
  right: 0rem;
  width: 18rem;
  height: 11rem;
  top: 2rem;
  padding: 1rem;
  border-radius: 10px;
  z-index: 1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media screen and (max-width: 550px) {
    width: 13rem;
    height: 11rem;
    right: -1rem;
  }
`;

const PostEditHeader = styled.h5`
  margin: 0;
  text-align: center;
  padding-bottom: 0.5rem;
`;

const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  height: 2.3rem;
  cursor: pointer;
`;

const IconContent = styled.div`
  width: 2rem;
  margin-bottom: 1rem;
`;

const Icon = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

const EditText = styled.h5`
  margin: 0;
  padding-left: 1rem;
  padding-bottom: 1rem;
  &:hover {
    color: blue;
  }
`;

export {
  PostEditOptions,
  PostEditHeader,
  IconTextContainer,
  IconContent,
  Icon,
  EditText,
};
