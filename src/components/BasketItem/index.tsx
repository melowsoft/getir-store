import React from 'react'

import { Basket, Decreament, Increament, ItemName, ItemPrice, Number, Qunatity } from "./styles"

interface Props {
  title: string;
  amount: string;
}

export const BasketItem: React.FC<Props> = ({title, amount}: Props) => (
  <Basket>
        <div>
          <ItemName>{title}</ItemName>
          <ItemPrice>{amount}</ItemPrice>
        </div>

        <Qunatity>
          <Decreament>-</Decreament>
          <Number>1</Number>
          <Increament>+</Increament>
        </Qunatity>
     </Basket>
)