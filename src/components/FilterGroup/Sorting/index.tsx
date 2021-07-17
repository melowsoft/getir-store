import React from 'react'
import { FilterTitle } from '../FilterTitle'
import { FilterCard } from '../FilterCard'


import {Container} from "./styles"
import { TabSelectorSort } from '../TabSelectorSort'

interface Props {
  setFilter(brand: string): any;
}

export const Sorting: React.FC<Props> = ({setFilter}: Props) => (
  <Container>
    <FilterTitle title="Sorting"/>
    <FilterCard>
      <TabSelectorSort
      buttonStyle="round" 
      options={[
        {title: 'Price low to high', id: 0, constant: 'PRICE-LOW-HIGH'},
        {title: 'Price high to low', id: 1, constant: 'PRICE-HIGH-LOW'},
        {title: 'New to old', id: 2, constant: 'NEW-TO-OLD'},
        {title: 'Old to new', id: 3, constant: 'OLD-To-NEW'},
        ]}
        setFilter={setFilter} 
      />
    </FilterCard>
  </Container>
)