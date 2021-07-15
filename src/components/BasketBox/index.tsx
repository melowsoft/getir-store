import React from 'react'
import { BasketItem } from '../BasketItem'

import {  BasketWrapper, CheckoutButton, Container, Group, ButtonWrap  } from "./styles"

export const BasketBox: React.FC = () => (
  <Container>
    <BasketWrapper>
      <Group>
        <BasketItem title="Example Product" amount="₺9,99"/>
        <BasketItem title="Example Product" amount="₺9,99"/>
        <BasketItem title="Example Product" amount="₺9,99"/>
      </Group>

      <ButtonWrap>
         <CheckoutButton>₺39,99</CheckoutButton>
      </ButtonWrap>
    </BasketWrapper>
  </Container>
)