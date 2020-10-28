import styled from "styled-components";

const UserFrendPostCntr = styled.div`
  width: 57%;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0;
  }

  @media screen and (max-width: 550px) {
    overflow-y: "";
  }
`;

export { UserFrendPostCntr };
