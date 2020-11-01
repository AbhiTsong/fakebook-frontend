import styled from "styled-components";

const RightNavContainer = styled.aside`
  width: 30rem;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const ContactsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  color: gray;
  margin-right: 1rem;
  position: relative;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

const ContactsText = styled.text`
  font-weight: 500;
`;

const ContactDots = styled.text`
  font-weight: 900;
`;

export { RightNavContainer, ContactsHeader, ContactsText, ContactDots };
