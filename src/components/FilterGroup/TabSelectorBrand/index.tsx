import React, {useState} from 'react'
import {ReactComponent as BoxUnselect} from "../../../assets/svg/unselected-box.svg"
import {ReactComponent as BoxSelect} from "../../../assets/svg/selected-box.svg"


import {TabItem, TabTitle, TabList} from "./styles"

interface Props {
  options: string[];
  buttonStyle: string;
  setBrand(brand: string): any;
  brandTerm: string;
}

export const TabSelectorBrand: React.FC<Props> = ({options, buttonStyle, setBrand, brandTerm}: Props) => {

  return (
  <TabList buttonStyle={buttonStyle}>
     <TabItem onClick={() => setBrand("ALL")}>
        {
         (brandTerm === "ALL" ? <BoxSelect /> : <BoxUnselect />)
        }
        <TabTitle>ALL ({options.length})</TabTitle>
      </TabItem>
    {
      options.map((brand, index) => (
        <TabItem key={index} onClick={() => setBrand(brand)}>
        {
         (brandTerm === brand ? <BoxSelect /> : <BoxUnselect />)
        }
        <TabTitle>{brand}</TabTitle>
      </TabItem>
      ))
    }
  </TabList>
  )
}