import React, {useEffect, useState} from 'react'
import { PageTitle } from '../PageTItle'
import {  PaginationComp } from '../PaginationComp'
import { ProductList } from '../ProductList'
import { useTypedSelector } from '../../hooks/useTypedSelector' 
import {useActions} from "../../hooks/useAction"
import {Product} from "../../state/interface/product"

import { Container, FilterItem, TypeFilter } from "./styles"

export const ProductBox: React.FC = () => {
   const { fetchProducts } = useActions();
  const [productType, setproductType] = useState<string>('mug');
  const { data, error, loading } = useTypedSelector((state) => state.products)
  const [products, setProducts] = useState<Product[]>([]);
  
  const [pageNumber, setPageNumber] = useState(0);

  const itemPerPage = 20;
  const pageVisited = pageNumber * itemPerPage
  const pageCount = Math.ceil(data.length / itemPerPage)
  

  useEffect(() => {
    fetchProducts()
     
  }, [])

  const applyPagiantion = () => {
    const paginated = data.slice(pageVisited, pageVisited + itemPerPage)
    return setProducts(paginated);
  }


  const onChange = ({selected}: any) => Number (
      setPageNumber(selected)
  )

  return (
  <Container>
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
      <ProductList products={products}/>
      <PaginationComp onChange={onChange} pageCount={pageCount}/>
    </Container>
    )
}