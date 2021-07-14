import React, {useState} from 'react'
import {ReactComponent as Selected} from "../../../assets/svg/selected-circle.svg"
import {ReactComponent as UnSelected} from "../../../assets/svg/unselected-circle.svg"
import {ReactComponent as BoxUnselect} from "../../../assets/svg/unselected-box.svg"
import {ReactComponent as BoxSelect} from "../../../assets/svg/selected-box.svg"

import {TabItem, TabTitle, TabList} from "./styles"

interface Props {
  options: {title: string, id: number}[];
  buttonStyle: string;
}

export const TabSelector: React.FC<Props> = ({options, buttonStyle}: Props) => {
    const [active, setActiveState] = useState(1)

  return (
  <TabList buttonStyle={buttonStyle}>
    {
      options.map(({title, id}) => (
        <TabItem key={id} onClick={() => setActiveState(id)}>
          
          {
          buttonStyle === 'round' 
          && (id === active ? <Selected /> : <UnSelected />)
          }
          {
          buttonStyle === 'box' 
          && (id === active ? <BoxSelect /> : <BoxUnselect />)
          }
          <TabTitle>{title}</TabTitle>
        </TabItem>
      ))
    }
  </TabList>
  )
}