import styled from "styled-components";

interface ParagraphProps {
  fontSize?: string;
  color?: string;
}

export default styled.p<ParagraphProps>`
  font-size: ${(props) => props.fontSize || "1rem"};
  color: ${(props) => props.color || "#fff"};
`;
