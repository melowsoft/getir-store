import React from "react"

import {Container, Image} from "./styles"
import Logo from "../../assets/svg/Logo.svg"

export const BrandIcon: React.FC = () => (
  <Container data-testid="brand-logo">
      <Image src={Logo} alt="brand-logo"/>
  </Container>
)