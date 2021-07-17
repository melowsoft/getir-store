import React from 'react'
import { AddButton } from '../AddButton'
import {Container, ImageWrapper, Image, Price, ProductName} from "./styles"
import { Product } from "../../state/interface/product"
import SHIRT from "../../assets/images/shirt.jpg"
import MUG from "../../assets/images/mug2.jpg"

interface Props {
  product: Product;
}

export const ProductDetail: React.FC<Props> = ({product}: Props) => (
  <Container>
    <div>
    <ImageWrapper>
      <Image style={{backgroundImage: product.itemType === 'mug' ? `url('${MUG}')` : `url('${SHIRT}')`}}/>
    </ImageWrapper>
    <Price>₺ {product.price}</Price>
    <ProductName>{product.name}</ProductName>
    </div>
  
    <AddButton title="Add"/>
  </Container>
)