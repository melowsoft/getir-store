import React from 'react'
import { BasketBox } from '../BasketBox'
import { FilterControls } from '../FilterControls'
import { ProductBox } from '../ProductsBox'

import {Container} from "./styles"

export const ContenArea: React.FC = () => (
  <Container>
    <FilterControls />
    <ProductBox />
    <BasketBox />
  </Container>
)