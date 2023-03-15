import styled from "styled-components";

interface LineProps {
  size?: string;
  color?: string;
}

export default styled.div<LineProps>`
  border-bottom: 1px solid #fff;
  font-size: ${(props) => props.size || "1rem"};
  color: ${(props) => props.color};
  margin-bottom: 15px;
`;
