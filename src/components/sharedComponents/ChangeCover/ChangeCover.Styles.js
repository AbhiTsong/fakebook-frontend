import styled from "styled-components";

const CoverUploadContainer = styled.div`
  position: relative;
  display: flex;
`;

const CoverIconContainer = styled.div`
  width: 1.5rem;
  z-index: 10;
`;

const CoverIcon = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

const CoverInput = styled.input`
  opacity: 0;
  width: 10rem;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  height: 2rem;
  cursor: pointer;

  .Cover_File_Input::-webkit-file-upload-button {
    visibility: hidden;
    opacity: 0;
  }
`;

export { CoverUploadContainer, CoverIconContainer, CoverIcon, CoverInput };
