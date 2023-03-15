import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserDto } from "../api/users/dto/user.dto";
import Button from "../components/button";
import { Container } from "../components/container";
import { Div } from "../components/div";
import { Error } from "../components/error";
import Flex from "../components/flex";
import Title from "../components/title";
import TitleContent from "../components/titleContent";
import useInput from "../hooks/useInput";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { signUp } from "./authActions";

const SignUp: FC = () => {
  const { error } = useTypeSelector((state) => state.auth); //почему-то не приходит ошибка?
  const dispatch = useDispatch();

  const firstName = useInput("", {
    isEmpty: true,
    maxLength: 20,
  });
  const secondName = useInput("", {
    isEmpty: true,
    maxLength: 20,
  });
  const email = useInput("", {
    isEmpty: true,
    minLength: 7,
    maxLength: 20,
    isEmail: true,
  });
  const password = useInput("", { isEmpty: true, minLength: 6, maxLength: 20 });

  let user: UserDto = {
    first_name: firstName.value,
    second_name: secondName.value,
    email: email.value,
    password: password.value,
  };

  const navigate = useNavigate();

  const saveUser = async (user: UserDto) => {
    dispatch(signUp(user));

    navigate("/users/login");
  };

  return (
    <Container>
      <TitleContent paragraph="01" title="Sign Up" />
      {error ? <Error>{error}</Error> : null}
      <Flex flexDirection="column" justify="center" align="center">
        <Div width="70%">
          <Title>First name</Title>
          {firstName.isDirty && firstName.isEmpty && (
            <Error>The field cannot be empty</Error>
          )}
          {firstName.isDirty && firstName.maxLengthError && (
            <Error>The field must contain no more than 20 characters</Error>
          )}
          <input
            placeholder="Select name"
            onChange={(e) => firstName.onChange(e)}
            onBlur={(e) => firstName.onBlur(e)}
          />
          <Title>Second name</Title>
          {secondName.isDirty && secondName.isEmpty && (
            <Error>The field cannot be empty</Error>
          )}
          {secondName.isDirty && secondName.maxLengthError && (
            <Error>The field must contain no more than 20 characters</Error>
          )}
          <input
            placeholder="Select second name"
            onChange={(e) => secondName.onChange(e)}
            onBlur={(e) => secondName.onBlur(e)}
          />
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
            <Button onClick={() => saveUser(user)}>Sign up</Button>
          </Flex>
        </Div>
      </Flex>
    </Container>
  );
};

export default SignUp;
