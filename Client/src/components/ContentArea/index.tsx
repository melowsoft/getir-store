import React, {useState, useEffect} from 'react'
import { BasketBox } from '../BasketBox'
import { FilterControls } from '../FilterControls'
import { ProductBox } from '../ProductsBox'
import {useActions} from "../../hooks/useAction"
import { animateScroll as scroll} from 'react-scroll'


import {Container} from "./styles"
import { SideNav } from '../SideNav'

export const ContentArea: React.FC = () => {
  const { fetchProducts } = useActions();
  const [productType, setproductType] = useState<string>('mug');
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [sortType, setSortType] = useState<string>('sorting')
  const [filter, setFilter] = useState<string>('PRICE-LOW-HIGH')
  const [brandTerm, setBrandTerm] = useState<string>("ALL")
  const [tagTerm, setTagTerm] = useState<string>('ALL')
  

  useEffect(() => {
    const getProducts = (pageNumber: number,
        type: string,
        sortType: string, 
        filter: string,
        brandTerm: string,
        tagTerm: string
        ) => {
      fetchProducts(
        pageNumber, 
        type, 
        sortType, 
        filter, 
        brandTerm, 
        tagTerm
        );
     }
   
    getProducts(pageNumber, productType, sortType, filter, brandTerm, tagTerm)
     
  }, [pageNumber, productType, filter, brandTerm, tagTerm])



  const onChange = ({selected}: any): number => {
    setPageNumber(selected)
    scrollToTop()
    return selected;
  }

 const scrollToTop = () => {
    scroll.scrollToTop();
  }

 return (
 <Container>
   <SideNav 
   tagTerm={tagTerm}
   setTagTerm={setTagTerm}
   brandTerm={brandTerm}
   setBrandTerm={setBrandTerm}
   setFilter={setFilter}
   />
    <FilterControls 
      tagTerm={tagTerm}
      setTagTerm={setTagTerm}
      brandTerm={brandTerm}
      setBrandTerm={setBrandTerm}
      setFilter={setFilter}
    />
    <ProductBox 
      productType={productType} 
      setProductType={setproductType}
      onChange={onChange}
    />
    <BasketBox />

  </Container>
  )
}