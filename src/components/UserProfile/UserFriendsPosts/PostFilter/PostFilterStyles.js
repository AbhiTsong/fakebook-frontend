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

const FilterBtnCntr = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 11rem;
`;

const FilterViewOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0.2rem;
`;

const FilterIcons = styled.button`
  margin: 0;
  margin-bottom: ${({ small }) => (small ? "" : "0.2rem")};
  padding: ${({ small }) => (small ? "" : "0.5rem 2rem")};
  height: ${({ small }) => (small ? "1.3rem" : "2rem")};
  width: ${({ small, loading }) => (small && loading ? "5rem" : "")};
  border-radius: 5px;
  outline-color: transparent;
  border: transparent;
  /* border: ${({ small }) => (small ? "" : `transparent`)}; */
  color: ${({ light }) => (light ? "#3e3c3c" : `white`)};
  background-color: ${({ light }) => (light ? `transparent` : "#3e3c3c")};

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${({ light }) => (light ? `lavender` : "#343232")};
    cursor: pointer;
  }
`;

const LoaderGif = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
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
