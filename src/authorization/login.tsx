import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { UserDto } from "../api/users/dto/user.dto";
import Button from "../components/button";
import { Container } from "../components/container";
import { Div } from "../components/div";
import Flex from "../components/flex";
import Title from "../components/title";
import TitleContent from "../components/titleContent";
import useInput from "../hooks/useInput";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { login } from "./authActions";
import { Error } from "../components/error";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const { token, error } = useTypeSelector((state) => state.auth); //почему-то не приходит ошибка?
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const password = useInput("", { isEmpty: true, minLength: 6, maxLength: 20 });
  const email = useInput("", {
    isEmpty: true,
    minLength: 7,
    maxLength: 20,
    isEmail: true,
  });

  let user: UserDto = {
    email: email.value,
    password: password.value,
  };

  const loginUser = (user: UserDto) => {
    dispatch(login(user));
    navigate("/");
  };

  localStorage.setItem("token", token);

  return (
    <Container>
      <TitleContent paragraph="02" title="Login" />
      <Flex flexDirection="column" justify="center" align="center">
        <Div width="70%">
          <Title>Email</Title>
          {email.isDirty && email.isEmpty && (
            <Error>The field cannot be empty</Error>
          )}
          {email.isDirty && email.maxLengthError && (
            <Error>The field must contain no more than 20 characters</Error>
          )}
          {email.isDirty && email.emailError && <Error>Incorrect email</Error>}
          <input
            placeholder="Select email"
            onChange={(e) => email.onChange(e)}
            onBlur={(e) => email.onBlur(e)}
          />
          <Title>Password</Title>
          {password.isDirty && password.isEmpty && (
            <Error>The field cannot be empty</Error>
          )}
          {password.isDirty && password.minLengthError && (
            <Error>The field must contain at least 6 characters</Error>
          )}
          {password.isDirty && password.maxLengthError && (
            <Error>The field must contain no more than 20 characters</Error>
          )}
          <input
            placeholder="Select password"
            onChange={(e) => password.onChange(e)}
            onBlur={(e) => password.onBlur(e)}
          />
          <Flex justify="flex-end">
            <Button
              onClick={() => {
                loginUser(user);
              }}
            >
              Sign in
            </Button>
          </Flex>
        </Div>
      </Flex>
    </Container>
  );
};

export default Login;
