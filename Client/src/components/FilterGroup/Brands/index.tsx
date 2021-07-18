import React, { useEffect, useState } from 'react'
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
  const [brands, setBrandList] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState<string>("")

  const filterBrands = (text: string) => {
    if (text !== ""){
      const arr = brands.filter(item => item.includes(text.toLocaleLowerCase()))
    return  setBrandList(arr)
    }  
 }

 const onChange = (query: any) => {
  setSearchQuery(query)
  filterBrands(query)
}
 
  useEffect(() => {
     if(brands.length < 1){
       setBrandList(data.brands)
     }
  }, [onChange, searchQuery])

 

 return (
 <Container>
    <FilterTitle title="Brands"/>
    <FilterCard height={230}>
      <>
      <SearchBox 
        placeholder="Search Brands"
        searchQuery={searchQuery}
        onChange={onChange}
      />

      <TabSelectorBrand
        buttonStyle="box" 
        options={brands} 
        setBrand={setBrand}
        brandTerm={brandTerm}
      />
      </>
    </FilterCard>
  </Container>)
}