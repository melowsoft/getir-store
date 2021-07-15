import React from 'react'
import { AddButton } from '../AddButton'
import {Container, ImageWrapper, Image, Price, ProductName} from "./styles"

export const ProductDetail: React.FC = () => (
  <Container>
    <ImageWrapper>
      <Image />
    </ImageWrapper>

    <Price>₺ 14,99</Price>
    <ProductName>Gorgeous Office Mug</ProductName>
    <AddButton title="Add"/>
  </Container>
)