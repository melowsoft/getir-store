import React from 'react'
import { FilterTitle } from '../FilterTitle'
import { FilterCard } from '../FilterCard'
import {  TabSelectorTag } from '../TabSelectorTag'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

import {Container} from "./styles"
import { SearchBox } from '../SearchBox'

interface Props {
  tagTerm: string;
  setTagTerm(brand: any): any;
}

export const Tags: React.FC<Props> = ({tagTerm, setTagTerm}: Props) => {
  const { data, error, loading } = useTypedSelector((state) => state.products)
  const tagsOptions = data.tags.map((prod, index) => {
    return {title: prod, id: index + 1}
  })
 return (
  <Container>
    <FilterTitle title="Tags"/>
    <FilterCard height={230}>
      <>
      <SearchBox placeholder="Search Tags"/>
      <TabSelectorTag
        buttonStyle="box" 
        options={tagsOptions}
        tagTerm={tagTerm}
        setTagTerm={setTagTerm} 
      />
      </>
    </FilterCard>
  </Container>
  )
}