import styled from "styled-components";

const FilterContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  margin-top: 1rem;
  width: 100%;
  background-color: ${({ light }) => (light ? `white` : "#3e3c3c")};

  @media screen and (max-width: 800px) {
    border-radius: 0;
  }
`;

const FilterTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

const FilterText = styled.h4`
  margin: 0;
`;

const FilterBtnCntr = styled.div``;

const FilterViewOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;
`;

const FilterIcons = styled.button`
  margin: 0;
  padding: ${({ small }) => (small ? "" : "0.5rem 2rem")};
  height: ${({ small }) => (small ? "" : "2rem")};
  border-radius: 5px;
  outline-color: transparent;
  border: ${({ small }) => (small ? "" : `transparent`)};
  color: ${({ light }) => (light ? "#3e3c3c" : `white`)};
  background-color: ${({ light }) => (light ? `transparent` : "#3e3c3c")};
  &:focus {
    outline: none;
    outline-color: transparent;
  }

  &:hover {
    background-color: ${({ light }) => (light ? `white` : "#343232")};
  }
`;

const LoaderGif = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

export {
  FilterContainer,
  FilterTitle,
  FilterText,
  FilterBtnCntr,
  FilterViewOptions,
  FilterIcons,
  LoaderGif,
};
