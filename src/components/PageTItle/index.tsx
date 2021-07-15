import React from 'react'

import {Text} from "./styles"

interface Props {
  pageTitle: string;
}

export const PageTitle: React.FC<Props> = ({pageTitle}: Props) => (
  <Text>
    {pageTitle}
  </Text>
)