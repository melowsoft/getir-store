import React from 'react'
import { FilterTitle } from '../FilterTitle'
import { FilterCard } from '../FilterCard'
import { TabSelector } from '../TabSelector'

import {Container} from "./styles"
import { SearchBox } from '../SearchBox'

export const Tags: React.FC = () => (
  <Container>
    <FilterTitle title="Tags"/>
    <FilterCard height={230}>
      <>
      <SearchBox placeholder="Search Brands"/>
      <TabSelector
      buttonStyle="box" 
      options={[
        {title: 'All (18)', id: 1},
        {title: 'Beach (5)', id: 2},
        {title: 'People (4)', id: 3},
        {title: 'Food (2)', id: 4},
        ]} 
      />
      </>
    </FilterCard>
  </Container>
)