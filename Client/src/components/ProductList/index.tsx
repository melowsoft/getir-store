import React from 'react'
import { ProductDetail } from '../ProductDetail'
import {Product} from "../../state/interface"

import {Container} from "./styles"
import { LoaderList } from '../LoaderList'

interface Props {
  products?: Product[];
  loading: boolean;
}

export const ProductList: React.FC<Props> = ({products, loading}: Props) => {

 return (
    <Container>
      {
        products && products.map((item: Product, index: number) => (
          <ProductDetail key={index} product={item}/>
        ))
      }
      {
        loading && <LoaderList />
      }
     
    </Container>
    )
}