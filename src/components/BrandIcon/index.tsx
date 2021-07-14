import React from "react"

import {Container, Image} from "./styles"
import Logo from "../../assets/svg/Logo.svg"

export const BrandIcon: React.FC = () => (
  <Container>
      <Image src={Logo} alt="brand-logo"/>
  </Container>
)