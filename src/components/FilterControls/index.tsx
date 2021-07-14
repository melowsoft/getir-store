import React from 'react'
import { Brands } from '../FilterGroup/Brands'
import { Sorting } from '../FilterGroup/Sorting'

import { Container } from "./styles"

export const FilterControls: React.FC = () => (
  <Container>
    <Sorting />
    <Brands />
  </Container>
)