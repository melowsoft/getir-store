import React from 'react'

import {Container, Content} from "./styles"

interface Props {
  children: JSX.Element;
  height?: number;
}

export const FilterCard: React.FC<Props> = ({children, height}: Props) => (
  <Container height={height}>
    <Content>
      {children}
    </Content>
  </Container>
)