import styled from "styled-components";
import {media} from "../../styles/style-utils"


interface Props extends React.ComponentPropsWithoutRef<'div'> {
  active?: boolean
}

export const Container = styled.div`
  width: 60%;

  ${
    media.md`
      width: 100%;
    `
  }
`
export const TypeFilter = styled.div`
display: flex;
justify-content: space-between;
width: 129px;
height: 30px;
margin-bottom: 16px;
`

export const FilterItem = styled.div<Props>`
width: 60px;
display: flex;
justify-content: center;
align-items: center;
background: ${ props => props.active ? '#1EA4CE' : '#F2F0FD'};
border-radius: 2px;
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 18px;
text-align: center;
color: ${ props => props.active ? '#ffffff' : '#1EA4CE'};
cursor: pointer;
`