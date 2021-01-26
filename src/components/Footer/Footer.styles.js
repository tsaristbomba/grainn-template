import styled from "styled-components"
import { tertiary } from "../../styles/palette"

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  color: ${tertiary};

  @media screen and (max-width: 768px) {
    height: auto;
  }
`
export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1150px;
  padding: 24px;
`
export const FooterContent = styled.div`
  display: grid;
  grid-auto-columns: minmax(31%, 1fr);
  grid-template-areas: "col1 col2 col3";
  grid-gap: 1rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col2" "col1" "col3";
    grid-gap: 0.2rem;
    margin: 2rem 0;
  }
`
export const Column = styled.div`
  ul {
    list-style: none;
  }
`
export const FooterSocials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SocialLink = styled.a`
  color: ${tertiary};
  font-size: 2rem;
  margin: 1.5rem 0.5rem;
`
