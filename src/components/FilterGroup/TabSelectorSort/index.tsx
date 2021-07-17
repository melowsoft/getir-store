import React, {useState} from 'react'
import {ReactComponent as Selected} from "../../../assets/svg/selected-circle.svg"
import {ReactComponent as UnSelected} from "../../../assets/svg/unselected-circle.svg"


import {TabItem, TabTitle, TabList} from "./styles"

interface Props {
  options: {title: string, id: number, constant: string}[];
  buttonStyle: string;
  setFilter(brand: string): any;
}

export const TabSelectorSort: React.FC<Props> = ({options, buttonStyle, setFilter}: Props) => {
    const [active, setActiveState] = useState(0)

  const selectSort = (option: any) => {
    setActiveState(option.id)
    return setFilter(option.constant)
  }  

  return (
  <TabList buttonStyle={buttonStyle}>
    {
      options.map((option) => (
        <TabItem key={option.id} onClick={() => selectSort(option)}>
          {
          buttonStyle === 'round' 
          && (option.id === active ? <Selected /> : <UnSelected />)
          }
          <TabTitle>{option.title}</TabTitle>
        </TabItem>
      ))
    }
  </TabList>
  )
}