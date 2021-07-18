import React from 'react'
import { AddButton } from '../AddButton'
import {Container, ImageWrapper, Image, Price, ProductName} from "./styles"
import { Product } from "../../state/interface"
import SHIRT from "../../assets/images/shirt.jpg"
import MUG from "../../assets/images/mug2.jpg"
import {useActions} from "../../hooks/useAction"

interface Props {
  product: Product;
}

export const ProductDetail: React.FC<Props> = ({product}: Props) => {
  const { addToBasket } = useActions();
 const onAddToBasket = (product: Product) => {
    addToBasket(product)
 }
return  (<Container>
    <div>
    <ImageWrapper>
      <Image style={{backgroundImage: product.itemType === 'mug' ? `url('${MUG}')` : `url('${SHIRT}')`}}/>
    </ImageWrapper>
    <Price>₺ {product.price}</Price>
    <ProductName>{product.name}</ProductName>
    </div>
  
    <AddButton onAdd={onAddToBasket} product={product} title="Add"/>
  </Container>)
}