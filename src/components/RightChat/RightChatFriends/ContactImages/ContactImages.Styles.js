import styled from "styled-components";

const ContactImgAndNameContr = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;

  &:hover {
    background-color: rgb(192, 192, 201);
    margin-right: 1rem;
    cursor: pointer;
  }
`;

const ContactImageCntr = styled.div`
  width: 3rem;
  margin-right: 1rem;
`;

const ContactImg = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`;

const ContactName = styled.div`
  text-transform: capitalize;
`;

export { ContactImgAndNameContr, ContactImageCntr, ContactImg, ContactName };
