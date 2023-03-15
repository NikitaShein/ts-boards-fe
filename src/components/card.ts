import styled from "styled-components";

type StyledCardProps = {
  display?: string;
  width?: string;
  height?: string;
  background?: string;
  border?: string;
  marginBottom?: string;
  marginRight?: string;
  hover?: boolean;
  verticalAlign?: string;
  isDraggingOver?: boolean;
};

export const Card = styled.div<StyledCardProps>`
  display: ${(props) => props.display || "block"};
  background: ${(props) => props.background || "#2e3032"};
  background: ${(props) => (props.isDraggingOver ? "#525557" : "#2e3032")};
  width: ${(props) => props.width || "100%"};
  min-height: ${(props) => props.height || "250px"};
  border: ${(props) => props.border || "none"};
  margin-bottom: ${(props) => props.marginBottom || "none"};
  padding: 15px 10px;
  margin-right: ${(props) => props.marginRight || "0"};
  vertical-align: ${(props) => props.verticalAlign || "baseline"};
  &:hover {
    border: ${(props) => (props.hover ? "1px solid #ffc700" : "none")};
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;
