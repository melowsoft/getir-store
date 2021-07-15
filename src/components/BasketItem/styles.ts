import styled from "styled-components";

export const Basket = styled.div`
padding-bottom: 16px;
border-bottom: 2px solid #f1f1f1;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 16px;
`
export const ItemName = styled.h5`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
letter-spacing: 0.16px;
color: #191919;
margin-bottom: 4px;
`

export const ItemPrice = styled.p`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 18px;
letter-spacing: 0.16px;
color: #1EA4CE;
`

export const Qunatity = styled.div`
display: flex;
align-items: center;
`

export const Increament = styled.div`
width: 20px;
height: 20px;
display: flex;
justify-content: center;
align-items: center;
color: #1EA4CE;
font-size: 15px;
font-weight: 600;
margin-left: 3px;
cursor: pointer;
`

export const Decreament = styled.div`
width: 20px;
height: 20px;
display: flex;
justify-content: center;
align-items: center;
color: #1EA4CE;
font-size: 20px;
font-weight: 600;
margin-right: 3px;
cursor: pointer;
`

export const Number = styled.div`
width: 32px;
height: 32px;
background: #1EA4CE;
display: flex;
justify-content: center;
align-items: center;
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
`