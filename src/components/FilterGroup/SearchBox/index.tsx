import React from 'react'

import {Field} from "./styles"

interface Props {
  placeholder: string;
  onChange(text: any): any;
  searchQuery: string;

}

export const SearchBox: React.FC<Props> = ({placeholder, onChange, searchQuery}: Props) => {

  return (
  <Field type="text" 
  placeholder={placeholder} 
  value={searchQuery} 
  onChange={(e)=> onChange(e.target.value)}
  />
  )
}