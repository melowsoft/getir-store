import React from 'react'
import {ReactComponent as BasketIcon} from "../../assets/svg/basket.svg"
import {
  CartButton,
    CartTotal,
    Container
} from "./styles"

interface Props {
  icon?: JSX.Element
}

export const Navbar: React.FC<Props> = ({icon}: Props) => {
    return (
      <Container>
        {icon && icon}
        <CartButton>
          <BasketIcon />
          <CartTotal>₺39,99</CartTotal>
        </CartButton>
      </Container>
    )
}