import React from 'react'
import { AddButton } from '../AddButton'
import {Container, ImageWrapper, Image, Price, ProductName} from "./styles"
import { Product } from "../../state/interface/product"

interface Props {
  product: Product;
}

export const ProductDetail: React.FC<Props> = ({product}: Props) => (
  <Container>
    <ImageWrapper>
      <Image />
    </ImageWrapper>

    <Price>₺ {product.price}</Price>
    <ProductName>{product.name}</ProductName>
    <AddButton title="Add"/>
  </Container>
)