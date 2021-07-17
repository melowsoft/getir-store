import React from 'react'
import { FilterTitle } from '../FilterTitle'
import { FilterCard } from '../FilterCard'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

import {Container} from "./styles"
import { SearchBox } from '../SearchBox'
import { TabSelectorBrand } from '../TabSelectorBrand'

interface Props {
  setBrand(brand: any): any;
  brandTerm: string;
}

export const Brands: React.FC<Props> = ({setBrand, brandTerm}: Props) => {
  const { data, error, loading } = useTypedSelector((state) => state.products)
  const brandOptions = data.brands.map((brand, index) => {
    return {title: brand, id: index + 1}
  })

 return (
 <Container>
    <FilterTitle title="Brands"/>
    <FilterCard height={230}>
      <>
      <SearchBox placeholder="Search Brands"/>
      <TabSelectorBrand
        buttonStyle="box" 
        options={brandOptions} 
        setBrand={setBrand}
        brandTerm={brandTerm}
      />
      </>
    </FilterCard>
  </Container>)
}