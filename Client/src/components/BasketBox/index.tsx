import React from 'react'
import { BasketItem } from '../BasketItem'
import { BasketPick } from "../../state/interface"
import { useTypedSelector } from '../../hooks/useTypedSelector'
import {useActions} from "../../hooks/useAction" 

import {  BasketWrapper, CheckoutButton, Container, Group, ButtonWrap  } from "./styles"

interface Props {
  showBasket: boolean
}

export const BasketBox: React.FC<Props> = ({showBasket}: Props) => {

  const { basket, total } = useTypedSelector((state) => state.basket)
  const { show } = useTypedSelector((state) => state.showBasket)
   return (<Container>
     
 {show &&(<BasketWrapper>
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