import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 225px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const ImageWrapper = styled.div`
padding: 16px;
border-radius: 12px;
background: #FEFEFE;
border: 1.17666px solid #F3F0FE;
margin-bottom: 8px;
width: 100%;
` 
export const Image = styled.div`

height: 92px;
background: #C4C4C4;
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
width: 100%;
`
export const Price = styled.p`
font-family: Helvetica;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 20px;
color: #1EA4CE;
margin-bottom: 4px;
`
export const ProductName = styled.h3`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #191919;
margin-bottom: 7px;
`  