import React from 'react'
import { ProductDetail } from '../ProductDetail'
import {Product} from "../../state/interface/product"

import {Container} from "./styles"

interface Props {
  products?: Product[]
}

export const ProductList: React.FC<Props> = ({products}: Props) => {

 return (
    <Container>
      {
        products && products.map((item: Product, index: number) => (
          <ProductDetail key={index} product={item}/>
        ))
      }
    </Container>
    )
}