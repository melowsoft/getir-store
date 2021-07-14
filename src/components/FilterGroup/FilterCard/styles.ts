import styled from "styled-components";

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  height?: number
}

export const Container = styled.div<Props>`
  width: 100%;
  height: ${props => props.height ? `${props.height}px` : '184px'};
  background: #FFFFFF;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  padding: 24px;
  overflow-y: hidden;
`

export const Content = styled.div`
 height: 100%;
 overflow: hidden;
`