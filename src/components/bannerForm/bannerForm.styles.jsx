import styled from "styled-components";

export const FormContainer = styled.form`
  display: grid;
  grid-gap: 8px;
  width: 100%;
  ${({ $pageType }) => {
    switch ($pageType) {
      case "traffic":
        return `
        height: 40px;
        grid-template-columns: 242px 242px 40px;
        grid-template-areas: "select1 select2 btn";
        `;
      default:
        return `
          width: 100%;
          grid-template-rows: repeat(2, 40px);
          grid-template-columns: repeat(2, 1fr) 40px;
          grid-template-areas:
            "input input input"
            "select1 select2 btn";
          input {
            border-radius: 6px;
            width: 100%;
            grid-area: input;
            padding: 8.5px 24px;
            font-size: 16px;
            line-height: 40px;
            ::placeholder {
              font-weight: 400;
              font-size: 16px;
              color: #d2d2d2;
              font-family: "Noto Sans TC", sans-serif;
            }
          }
      `;
    }
  }}
`;
