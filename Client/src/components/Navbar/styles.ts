import styled from "styled-components"
import { primaryColor, navbarHeight } from "../../styles/global"
import {media} from "../../styles/style-utils"

export const Container = styled.div`
   background: ${primaryColor};
   height: ${navbarHeight};
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
   position: fixed;
   z-index: 1000000;
 `

 export const CartButton = styled.div`
 position: absolute;
 right: 104px;
 width: 80px;
 height: 76px;
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;

  &:hover {
    background: #147594;
  }

  ${
    media.sm`
      right: 15px;
    `
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

export const MenuButton = styled.div`
  position: absolute;
  left: 20px;
  cursor: pointer;

  ${
    media.md`

    `
  }
`
export const Icon = styled.img`
  width: 30px;
` 