import styled from "styled-components";

const ContactsContainer = styled.div`
  margin-right: 1rem;
  border-radius: 5px;
  position: relative;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export { ContactsContainer };
