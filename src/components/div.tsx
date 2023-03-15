import styled from "styled-components";

type DivProps = {
  display?: string;
  height?: string;
  background?: string;
  width?: string;
  marginBottom?: string;
  marginRight?: string;
};

export const Div = styled.div<DivProps>`
  display: ${(props) => props.display || "block"};
  background: ${(props) => props.background || "#2e3032"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  margin-bottom: ${(props) => props.marginBottom || "none"};
  padding: 20px 20px;
  margin-right: ${(props) => props.marginRight || "none"};
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;
