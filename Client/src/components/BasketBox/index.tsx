import React from 'react'
import { BasketItem } from '../BasketItem'
import { BasketPick } from "../../state/interface"
import { useTypedSelector } from '../../hooks/useTypedSelector'


import {  BasketWrapper, CheckoutButton, Container, Group, ButtonWrap  } from "./styles"



export const BasketBox: React.FC = () => {

  const { basket, total } = useTypedSelector((state) => state.basket)
  const { show } = useTypedSelector((state) => state.showBasket)
   return (<Container data-testid="basket-box">
     
  {show && total > 0 && (<BasketWrapper>
            <Group>
              {
                basket.map((item: BasketPick, index: number) => (
                  <BasketItem key={index} product={item}/>
                ))
              }
            </Group>

            <ButtonWrap>
         <CheckoutButton>₺{total.toLocaleString()}</CheckoutButton>
      </ButtonWrap>
    </BasketWrapper>)
    }
  </Container>)
}