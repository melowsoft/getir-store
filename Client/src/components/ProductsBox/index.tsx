import React from 'react'
import { PageTitle } from '../PageTItle'
import { PaginationComp } from '../PaginationComp'
import { ProductList } from '../ProductList'
import { useTypedSelector } from '../../hooks/useTypedSelector' 

import { Container, FilterItem, TypeFilter } from "./styles"
import { ProductLoder } from '../ProductLoader'

interface Props {
  productType: string;
  setProductType(type: string): any;
  onChange({selected}: any): number;
}

export const ProductBox: React.FC<Props> = ({productType, setProductType, onChange}: Props) => {
 
  const { data, error, loading } = useTypedSelector((state) => state.products)
 
  return (
  <Container>
      <PageTitle pageTitle="Products"/>
      <TypeFilter>
          <FilterItem 
          active={productType === 'mug' ? true : false}
          onClick={() => setProductType('mug')}
          >
            Mug
          </FilterItem>
          <FilterItem 
          active={productType === 'shirt' ? true : false}
          onClick={() => setProductType('shirt')}
          >
            Shirt
          </FilterItem>
      </TypeFilter>
      <ProductList products={data.products} loading={loading}/>
     
      <PaginationComp onChange={onChange} pageCount={data.pagination.totalPages}/>
    </Container>
    )
}