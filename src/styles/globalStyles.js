import styled, { createGlobalStyle, keyframes } from "styled-components"
import { ImSpinner2 } from "react-icons/im"
import { primary } from "./palette"

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Open Sans", "Noto Sans JP", sans-serif;
        line-height: 1.7rem;
    }
`

const spin = keyframes`
    100% {
        transform: rotate(360deg);
    }
    
`

export const Spinner = styled(ImSpinner2)`
  position: absolute;
  top: 45%;
  left: 45%;
  color: ${primary};
  font-size: 2rem;
  animation: ${spin} 2s linear infinite;
`
export default GlobalStyles
