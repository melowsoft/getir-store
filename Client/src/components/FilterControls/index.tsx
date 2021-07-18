import React from 'react'
import { Brands } from '../FilterGroup/Brands'
import { Sorting } from '../FilterGroup/Sorting'
import { Tags } from '../FilterGroup/Tags'

import { Container } from "./styles"

interface Props {
  setTagTerm(brand: any): any;
  setBrandTerm(brand: any): any;
  setFilter(brand: string): any;
  brandTerm: string;
  tagTerm: string;
}

export const FilterControls: React.FC<Props> = ({ 
  setFilter, 
  setBrandTerm,
  setTagTerm,
  tagTerm,
  brandTerm}: Props) => (
  <Container>
    <Sorting setFilter={setFilter}/>
    <Brands setBrand={setBrandTerm} brandTerm={brandTerm}/>
    <Tags tagTerm={tagTerm} setTagTerm={setTagTerm}/>
  </Container>
)