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
  ColumnOne,
  FooterSocials,
  SocialLink,
} from "./Footer.styles"

const Footer = () => {
  console.log(data)

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
          <ColumnOne>
            {/* <h2>{data.columnOne.list}</h2>
            <ul>
              {data.columnOne.items.map((item, key) => (
                <li key={key}>{item}</li>
              ))}
            </ul> */}
          </ColumnOne>
        </FooterContent>
        <FooterSocials>
          {data.socials.map((item, key) => (
            <SocialLink key={key} href={item.link} target="__blank">
              {getSocialIcon(item.socialNetwork)}
            </SocialLink>
          ))}
        </FooterSocials>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
