import React from 'react'

import {Button} from "./styles"

interface Props {
  title: string;
}

export const AddButton: React.FC<Props> = ({title}: Props) => (
  <Button>
    {title}
  </Button>
)