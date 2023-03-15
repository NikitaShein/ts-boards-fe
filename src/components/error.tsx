import styled from "styled-components";

export const Error = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  background: #790604;
  border-radius: 3px;
  padding: 10px;
  margin: 10px 0 10px 0;
  animation: show 2s ease;
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
