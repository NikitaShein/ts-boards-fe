import { IoCheckmarkDoneCircle } from "react-icons/io5";
import styled from "styled-components";

type FetchIconProps = {
  color?: string;
  fontSize?: string;
  transition?: string;
  $isHover?: string;
};

const FetchIcon = styled(IoCheckmarkDoneCircle)<FetchIconProps>`
  color: ${(props) => props.color || "white"};
  font-size: ${(props) => props.fontSize || "20px"};
  transition: ${(props) => props.transition || "500ms"};
  &:hover {
    color: ${(props) => (props.$isHover ? "#ffc700" : "none")};
  }
`;

export default FetchIcon;
