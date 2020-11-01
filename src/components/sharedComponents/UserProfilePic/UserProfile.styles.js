import styled from "styled-components";

const UserImage = styled.img`
  display: block;
  margin: 0;
  max-width: 100%;
  height: 100%;
  border: ${({ border }) => (border ? "0.3rem solid white" : "")};
  border-radius: 50%;
`;

export { UserImage };
