import styled from "styled-components";

const UserImage = styled.img`
  display: block;
  margin: 0;
  max-width: 100%;
  height: 100%;
  border: ${({ border, light }) =>
    border ? `0.3rem solid ${light ? `white` : "#525151"}` : ""};
  border-radius: 50%;
`;

export { UserImage };
