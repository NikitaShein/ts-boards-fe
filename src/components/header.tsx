import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import Flex from "./flex";
import LoginIcon from "./icons/login";
import SignUpIcon from "./icons/signUp";
import UserIcon from "./icons/user";
import Title from "./title";

const Header: FC = () => {
  const token = localStorage.getItem("token");

  return (
    <Flex padding="15px" justify="space-between" align="center">
      <Title fontSize="2rem" color="#25282a">
        <Link to="/">Techstack</Link>
      </Title>
      <Flex width="auto">
        {token ? null : (
          <Link to="/users/signup">
            <SignUpIcon $marginRight="10px" $isHover="true" />
          </Link>
        )}
        {token ? (
          <UserIcon $isHover="true" />
        ) : (
          <Link to="/users/login">
            <LoginIcon $isHover="true" />
          </Link>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
