import styled from "styled-components";
import {media} from "../../styles/style-utils"

export const Container = styled.div`
padding-top: 60px;
padding-left: 20px;
padding-right: 20px;
background: #fafafa;
overflow-y: scroll;
padding-bottom: 40px;
z-index: 1000000000;

${
  media.sm`
  width: 80%;
  `
}
`

export const CloseButton = styled.div`
        display: inline;
        border: 1px solid;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-weight: 700;
        font-size: 15px;
        color: black;
        position: absolute;
        right: 20px;
        top: 20px;
`

export const Wrapper = styled.div`
background: #ffffff;
`