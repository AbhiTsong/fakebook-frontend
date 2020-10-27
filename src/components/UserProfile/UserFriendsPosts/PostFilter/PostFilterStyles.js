import styled from "styled-components";

const FilterContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  margin-top: 1rem;
  width: 100%;

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

const FilterIcons = styled.h5`
  margin: 0;
`;

export {
  FilterContainer,
  FilterTitle,
  FilterText,
  FilterBtnCntr,
  FilterViewOptions,
  FilterIcons,
};
