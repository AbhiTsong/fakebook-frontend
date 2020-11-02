import styled from "styled-components";

const ContactImgAndNameContr = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;

  &:hover {
    background-color: rgb(192, 192, 201);
    border-radius: 10px;
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

const ContactName = styled.h5`
  text-transform: capitalize;
  margin: 0;
`;

export { ContactImgAndNameContr, ContactImageCntr, ContactImg, ContactName };
