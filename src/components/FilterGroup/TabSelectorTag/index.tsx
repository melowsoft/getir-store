import React, {useState} from 'react'
import {ReactComponent as BoxUnselect} from "../../../assets/svg/unselected-box.svg"
import {ReactComponent as BoxSelect} from "../../../assets/svg/selected-box.svg"

import {TabItem, TabTitle, TabList} from "./styles"

interface Props {
  options: {title: string, id: number}[];
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
      options.map(({title, id}) => (
        <TabItem key={id} onClick={() => setTagTerm(title)}>
          {
           tagTerm === title ? <BoxSelect /> : <BoxUnselect />
          }
          <TabTitle>{title}</TabTitle>
        </TabItem>
      ))
    }
  </TabList>
  )
}