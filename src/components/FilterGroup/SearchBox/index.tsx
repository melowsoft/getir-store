import React from 'react'

import {Field} from "./styles"

interface Props {
  placeholder: string
}

export const SearchBox: React.FC<Props> = ({placeholder}: Props) => (
  <Field type="text" placeholder={placeholder}/>
)