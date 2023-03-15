import { FaUserLock } from "react-icons/fa";
import styled from "styled-components";

type LoginProps = {
  color?: string;
  fontSize?: string;
  transition?: string;
  $isHover?: string;
};

const LoginIcon = styled(FaUserLock)<LoginProps>`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "20px"};
  transition: ${(props) => props.transition || "500ms"};
  &:hover {
    color: ${(props) => (props.$isHover ? "gray" : "none")};
  }
`;

export default LoginIcon;
