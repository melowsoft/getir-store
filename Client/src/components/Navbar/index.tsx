import React from 'react'
import {ReactComponent as BasketIcon} from "../../assets/svg/basket.svg"
import {useActions} from "../../hooks/useAction"
import { useTypedSelector } from '../../hooks/useTypedSelector' 
import {
  CartButton,
    CartTotal,
    Container
} from "./styles"

interface Props {
  icon?: JSX.Element
}

export const Navbar: React.FC<Props> = ({icon}: Props) => {
  const { toggleBasket } = useActions();
  const { total } = useTypedSelector((state) => state.basket)

  const onBasketToggle = () => {
      if(total > 0) {
       toggleBasket()
      }
  }

    return (
      <Container>
        {icon && icon}
        <CartButton onClick={() => onBasketToggle()}>
          <BasketIcon />
          <CartTotal>₺ {total.toLocaleString()}</CartTotal>
        </CartButton>
      </Container>
    )
}