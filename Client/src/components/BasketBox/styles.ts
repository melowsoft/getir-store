import styled from "styled-components";
import { media } from "../../styles/style-utils"


export const Container = styled.div`
    position: absolute;
    width: 30%;
    right: 0;
    top: 70px;
    background: #ffffff;
    z-index: 1000;
    ${
        media.sm`
        width: 100%;
        `
    }
`
export const BasketWrapper = styled.div`
border: 8px solid #1EA4CE;
border-radius: 2px;
width: 100%;
padding: 16px;
padding-top: 22px;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const CheckoutButton = styled.div`
background: #FFFFFF;
border: 2px solid #1EA4CE;
box-sizing: border-box;
border-radius: 2px;
width: 92px;
height: 51px;
display: flex;
justify-content: center;
align-items: center;
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: right;
color: #1EA4CE;
cursor: pointer;
`

export const ButtonWrap = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`

export const Group = styled.div`

`