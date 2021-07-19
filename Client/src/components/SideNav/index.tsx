import React from 'react'
import { Brands } from '../FilterGroup/Brands'
import { Sorting } from '../FilterGroup/Sorting'
import { Tags } from '../FilterGroup/Tags'
import { useTypedSelector } from '../../hooks/useTypedSelector' 
import { CloseButton, Container } from "./styles"
import {useActions} from "../../hooks/useAction"

interface Props {
  setTagTerm(brand: any): any;
  setBrandTerm(brand: any): any;
  setFilter(brand: string): any;
  brandTerm: string;
  tagTerm: string;
}

export const SideNav: React.FC<Props> = ({ 
  setFilter, 
  setBrandTerm,
  setTagTerm,
  tagTerm,
  brandTerm}: Props) => {
    const { toggleSideFilter } = useActions();
    const { style } = useTypedSelector((state) => state.showSideFilter)
return (  
<Container className={style}>
    <CloseButton onClick={() => toggleSideFilter("close")}>x</CloseButton>
    <Sorting setFilter={setFilter}/>
    <Brands setBrand={setBrandTerm} brandTerm={brandTerm}/>
    <Tags tagTerm={tagTerm} setTagTerm={setTagTerm}/>
  </Container>)
  }