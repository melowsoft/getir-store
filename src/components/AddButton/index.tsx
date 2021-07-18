import React from 'react'
import { Product } from "../../state/interface"

import {Button} from "./styles"

interface Props {
  title: string;
  onAdd(product: any): any;
  product: Product
}

export const AddButton: React.FC<Props> = ({title, onAdd, product}: Props) => (
  <Button onClick={() => onAdd(product)}>
    {title}
  </Button>
)