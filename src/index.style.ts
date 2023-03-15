import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "NHaasGroteskDSPro-65Md";
  }
  html {
    scroll-behavior: smooth;
}
  a {
    text-decoration: none;
    color: inherit;
    transition: 1s;
    display: block;
  }

  a:hover {
    color: grey;
  }

  input, textarea {
    width: 100%;
    padding: 5px;
    font-size: 1rem;
    outline: none;
    margin-bottom: 10px
  }
  textarea {
    height: 250px;
  }

  input:focus{
    border: 3px solid #ffc700
  }

  textarea:focus{
    border: 3px solid #ffc700
  }


  ::-webkit-scrollbar-track {
	background-color: #25282a;
}
  ::-webkit-scrollbar-thumb {
	border-radius: 3px;
	background-color: #ffc700;
}
  ::-webkit-scrollbar{
	height: 5px;
}


`;

export default Global;
