import { BsFillTrashFill } from "react-icons/bs";
import styled from "styled-components";

type TrashIconProps = {
  color?: string;
  fontSize?: string;
  transition?: string;
  $isHover?: string;
};

const TrashIcon = styled(BsFillTrashFill)<TrashIconProps>`
  color: ${(props) => props.color || "white"};
  font-size: ${(props) => props.fontSize || "20px"};
  transition: ${(props) => props.transition || "500ms"};
  &:hover {
    color: ${(props) => (props.$isHover ? "#ffc700" : "none")};
  }
`;

export default TrashIcon;
