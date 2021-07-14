import React from 'react'
import { FilterTitle } from '../FilterTitle'
import { FilterCard } from '../FilterCard'
import { TabSelector } from '../TabSelector'

import {Container} from "./styles"

export const Sorting: React.FC = () => (
  <Container>
    <FilterTitle title="Sorting"/>
    <FilterCard>
      <TabSelector
      buttonStyle="round" 
      options={[
        {title: 'Price low to high', id: 1},
        {title: 'Price high to low', id: 2},
        {title: 'New to old', id: 3},
        {title: 'Old to new', id: 4},
        ]} 
      />
    </FilterCard>
  </Container>
)