import React from 'react'
import {
    Container
} from "./styles"

interface Props {
  icon?: JSX.Element
}

export const Navbar: React.FC<Props> = ({icon}: Props) => {
    return (
      <Container>
        {icon && icon}
      </Container>
    )
}