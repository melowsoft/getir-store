import React, {useState, useEffect} from 'react'
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
  const [tags, setTags] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const filterTags = (text: string) => {
    if (text !== ""){
      const arr = tags.filter(item => item.includes(text.toLocaleLowerCase()))
    return  setTags(arr)
    }  
 }

 const onChange = (query: any) => {
  setSearchQuery(query)
  filterTags(query)
}
 
  useEffect(() => {
     if(tags.length < 1){
       setTags(data.tags)
     }
  }, [onChange, searchQuery])

 return (
  <Container>
    <FilterTitle title="Tags"/>
    <FilterCard height={230}>
      <>
      <SearchBox placeholder="Search Tags" 
        searchQuery={searchQuery}
        onChange={onChange}
      />
      <TabSelectorTag
        buttonStyle="box" 
        options={tags}
        tagTerm={tagTerm}
        setTagTerm={setTagTerm} 
      />
      </>
    </FilterCard>
  </Container>
  )
}