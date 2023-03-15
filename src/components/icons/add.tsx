import { BsFillPlusCircleFill } from "react-icons/bs";
import styled from "styled-components";

type AddIconProps = {
  $isVisibleButton?: boolean;
  display?: string;
  color?: string;
  fontSize?: string;
  transition?: string;
  $isHover?: string;
};

const AddIcon = styled(BsFillPlusCircleFill)<AddIconProps>`
  display: ${(props) => (props.$isVisibleButton ? "inline-block" : "none")};
  color: ${(props) => props.color || "white"};
  font-size: ${(props) => props.fontSize || "20px"};
  transition: ${(props) => props.transition || "500ms"};
  &:hover {
    color: ${(props) => (props.$isHover ? "#ffc700" : "none")};
  }
`;

export default AddIcon;
