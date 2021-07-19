import React from 'react'
import {BasketPick} from "../../state/interface"
import {useActions} from "../../hooks/useAction"
import { Basket, Decreament, Increament, ItemName, ItemPrice, Number, Qunatity } from "./styles"

interface Props {
product: BasketPick
}

export const BasketItem: React.FC<Props> = ({product}: Props) => {
  const { addToBasket, removeFromBasket } = useActions();

  const increament = () => addToBasket({name: product.name, price: product.price}) 
  const decreament = () => removeFromBasket({name: product.name, price: product.price}) 
  
 return (<Basket data-testid="basket-item">
        <div>
          <ItemName>{product.name}</ItemName>
          <ItemPrice>₺ {product.price || 0}</ItemPrice>
        </div>

        <Qunatity>
          <Decreament onClick={() => decreament()}>-</Decreament>
          <Number>{product.quantity}</Number>
          <Increament onClick={() => increament()}>+</Increament>
        </Qunatity>
     </Basket>)
}