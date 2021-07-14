import React from "react";

import {Container} from "./styles"

interface Props {
  children: JSX.Element
}

export const ContentWrapper: React.FC<Props> = ({children}: Props) => (
  <Container>
    {children}
  </Container>
)