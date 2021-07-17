import styled from "styled-components";

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  buttonStyle?: string
}

export const TabItem = styled.div`
display: flex;
align-items: center;
margin-bottom: 15px;
height: 22px;
cursor: pointer;
`
export const TabTitle = styled.p`
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;
letter-spacing: 0.16px;
margin-left: 12px;
`

export const TabList = styled.div<Props>`
 height: 100%;
 overflow-y: ${props => props.buttonStyle === 'box' ? 'auto' : 'hidden'};
 padding-bottom: ${props => props.buttonStyle === 'box' ? '55px' : 0};
 padding-top: ${props => props.buttonStyle === 'box' ? '5px' : 0};
`