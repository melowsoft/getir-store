import styled from "styled-components"
import { primaryColor, navbarHeight } from "../../styles/global"

export const Container = styled.div`
   background: ${primaryColor};
   height: ${navbarHeight};
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
   position: fixed;
 `

 export const CartButton = styled.div`
 position: absolute;
 right: 104px;
 width: 129px;
 height: 76px;
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;

  &:hover {
    background: #147594;
  }
 `

export const CartTotal = styled.p`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;
letter-spacing: 0.16px;
color: #FFFFFF;
margin-left: 4px;
`