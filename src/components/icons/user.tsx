import { FaUserCheck } from "react-icons/fa";
import styled from "styled-components";

type UserProps = {
  color?: string;
  fontSize?: string;
  transition?: string;
  $isHover?: string;
};

const UserIcon = styled(FaUserCheck)<UserProps>`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "20px"};
  transition: ${(props) => props.transition || "500ms"};
  &:hover {
    color: ${(props) => (props.$isHover ? "gray" : "none")};
  }
`;

export default UserIcon;
