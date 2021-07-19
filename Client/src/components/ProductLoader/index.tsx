import React from "react"
import { Loader, Container, AvatarWrap, Price, Title } from "./styles"

export const ProductLoder: React.FC = () => (
 <Container>
    <Loader>
      <AvatarWrap>
      <div className="avatar"></div>
      </AvatarWrap>
      <Price>
      <div className="line"></div>
       </Price>
       <Title>
      <div className="line"></div>
       </Title>
       <div className="line"></div>
    </Loader>
 </Container> 
  )
