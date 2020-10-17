import styled from "styled-components";

const RequestContainer = styled.div`
  padding: 0.5rem;
  margin-right: 1rem;
  &:hover {
    border-radius: 10px;
    background-color: rgb(187, 187, 199);
    cursor: pointer;
  }
`;

const RequestContent = styled.div`
  display: flex;
`;

const RequestImageContainer = styled.div`
  width: 3rem;
`;

const RequestImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`;

const RequesterName = styled.h5`
  margin: 0;
  margin-left: 0.5rem;
  text-transform: capitalize;
`;

const RequestButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const AcceptButton = styled.button`
  margin: 0;
  background-color: blue;
  border: none;
  color: white;
  border-radius: 3px;
  outline-color: transparent;
  padding: 0.5rem 1.5rem;
  &:hover {
    background-color: transparent;
    background-color: rgb(89, 89, 243);
  }
`;

const DeclineButton = styled.button`
  margin: 0;
  margin-left: 0.5rem;
  border: none;
  border-radius: 3px;
  outline-color: transparent;
  padding: 0.5rem 1.5rem;
  background-color: rgb(207, 207, 216);
  &:hover {
    background-color: rgb(156, 156, 163);
  }
`;

export {
  RequestContainer,
  RequestContent,
  RequestImageContainer,
  RequestImage,
  RequesterName,
  RequestButtonContainer,
  AcceptButton,
  DeclineButton,
};
