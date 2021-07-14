import React from 'react'
import { FilterTitle } from '../FilterTitle'
import { FilterCard } from '../FilterCard'
import { TabSelector } from '../TabSelector'

import {Container} from "./styles"
import { SearchBox } from '../SearchBox'

export const Brands: React.FC = () => (
  <Container>
    <FilterTitle title="Brands"/>
    <FilterCard height={230}>
      <>
      <SearchBox placeholder="Search Brands"/>
      <TabSelector
      buttonStyle="box" 
      options={[
        {title: 'All (18)', id: 1},
        {title: 'Apple (5)', id: 2},
        {title: 'LG (4)', id: 3},
        {title: 'Nike (2)', id: 4},
        ]} 
      />
      </>
    </FilterCard>
  </Container>
)