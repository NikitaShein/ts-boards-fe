import styled from "styled-components";

interface TitleProps {
  display?: string;
  verticalAlign?: string;
  marginBottom?: string;
  fontSize?: string;
  color?: string;
  upperCase?: boolean;
}

export default styled.h1<TitleProps>`
  font-size: ${(props) => props.fontSize || "1rem"};
  color: ${(props) => props.color || "#fff"};
  margin-bottom: ${(props) => props.marginBottom || "none"};
  vertical-align: ${(props) => props.verticalAlign || "baseline"};
  display: ${(props) => props.display || "block"};
  text-transform: ${({ upperCase }) => (upperCase ? "uppercase" : "none")};
`;
