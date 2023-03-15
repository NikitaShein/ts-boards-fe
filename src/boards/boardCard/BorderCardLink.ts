import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BorderCardLink = styled(NavLink)`
  width: 20%;
  margin-right: 15px;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export default BorderCardLink;
