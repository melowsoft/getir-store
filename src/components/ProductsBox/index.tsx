import React, {useState} from 'react'
import { PageTitle } from '../PageTItle'
import { ProductList } from '../ProductList'

import { Container, FilterItem, TypeFilter } from "./styles"

export const ProductBox: React.FC = () => {
   const [productType, setproductType] = useState<string>('mug')

 return (<Container>
    <PageTitle pageTitle="Products"/>
    <TypeFilter>
        <FilterItem 
        active={productType === 'mug' ? true : false}
        onClick={() => setproductType('mug')}
        >
          Mug
        </FilterItem>
        <FilterItem 
        active={productType === 'shirt' ? true : false}
        onClick={() => setproductType('shirt')}
        >
          Shirt
        </FilterItem>
    </TypeFilter>

    <ProductList />
    
  </Container>)
}