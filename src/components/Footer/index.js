import React from "react"
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterSquare,
} from "react-icons/ai"

import data from "../../../content/footer.yml"

import {
  FooterContainer,
  FooterWrapper,
  FooterContent,
  Column,
  FooterSocials,
  SocialLink,
} from "./Footer.styles"

const Footer = () => {
  function getSocialIcon(social) {
    const lower = social.toLowerCase()

    switch (lower) {
      case "facebook":
        return <AiFillFacebook />
      case "instagram":
        return <AiFillInstagram />
      case "youtube":
        return <AiFillYoutube />
      case "twitter":
        return <AiFillTwitterSquare />
      default:
        break
    }
  }

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContent>
          <Column>
            <h2>{data.columns.columnOne.list}</h2>
            <ul>
              {data.columns.columnOne.items.map((item, key) => (
                <li key={key}>{item.item}</li>
              ))}
            </ul>
          </Column>
          <Column>
            <h2>{data.columns.columnTwo.list}</h2>
            <ul>
              {data.columns.columnTwo.items.map((item, key) => (
                <li key={key}>{item.item}</li>
              ))}
            </ul>
          </Column>
          <Column>
            <h2>{data.columns.columnThree.list}</h2>
            <ul>
              {data.columns.columnThree.items.map((item, key) => (
                <li key={key}>{item.item}</li>
              ))}
            </ul>
          </Column>
        </FooterContent>
        <FooterSocials>
          <h2>Socials</h2>
          <div>
            {data.socials.map((item, key) => (
              <SocialLink key={key} href={item.link} target="__blank">
                {getSocialIcon(item.socialNetwork)}
              </SocialLink>
            ))}
          </div>
        </FooterSocials>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
