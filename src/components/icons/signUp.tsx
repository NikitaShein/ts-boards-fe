import { FaUserPlus } from "react-icons/fa";
import styled from "styled-components";

type SignUpProps = {
  color?: string;
  fontSize?: string;
  transition?: string;
  $isHover?: string;
  $marginRight?: string;
};

const SignUpIcon = styled(FaUserPlus)<SignUpProps>`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "20px"};
  transition: ${(props) => props.transition || "500ms"};
  margin-right: ${(props) => props.$marginRight || "none"};
  &:hover {
    color: ${(props) => (props.$isHover ? "gray" : "none")};
  }
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export default SignUpIcon;
