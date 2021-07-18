import React from 'react'

import { Text } from "./styles"

interface Props {
  title: string
}

export const FilterTitle: React.FC<Props> = ({title}: Props) => (
  <Text>
    {title}
  </Text>
)