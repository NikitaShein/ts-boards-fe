import styled from "styled-components";

type StyledFlexProps = {
  justify?: string;
  align?: string;
  padding?: string;
  flexGrow?: string;
  flexDirection?: string;
  width?: string;
  marginBottom?: string;
};

export default styled.div<StyledFlexProps>`
  display: flex;
  flex-grow: ${(props) => props.flexGrow || "0"};
  width: ${(props) => props.width || "100%"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  padding: ${(props) => props.padding || "0"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "center"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
