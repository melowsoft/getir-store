import React, {useState} from 'react'
import {ReactComponent as BoxUnselect} from "../../../assets/svg/unselected-box.svg"
import {ReactComponent as BoxSelect} from "../../../assets/svg/selected-box.svg"

import {TabItem, TabTitle, TabList} from "./styles"

interface Props {
  options: string[];
  buttonStyle: string;
  tagTerm: string;
  setTagTerm(brand: any): any;
}

export const TabSelectorTag: React.FC<Props> = ({options, buttonStyle, tagTerm, setTagTerm}: Props) => {

  return (
  <TabList buttonStyle={buttonStyle}>
     <TabItem onClick={() => setTagTerm("ALL")}>
          {
           (tagTerm === "ALL" ? <BoxSelect /> : <BoxUnselect />)
          }
          <TabTitle>ALL ({options.length})</TabTitle>
        </TabItem>
    {
      options.map((tag, index) => (
        <TabItem key={index} onClick={() => setTagTerm(tag)}>
          {
           tagTerm === tag ? <BoxSelect /> : <BoxUnselect />
          }
          <TabTitle>{tag}</TabTitle>
        </TabItem>
      ))
    }
  </TabList>
  )
}