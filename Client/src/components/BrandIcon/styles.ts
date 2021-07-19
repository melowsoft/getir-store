import styled from "styled-components";
import {media} from "../../styles/style-utils"

export const Container = styled.div`
  cursor: pointer;
`

export const Image = styled.img`
  max-width: 141px;
  max-height: 40px;

  ${
    media.sm`
    width: 100px;
    height: 30px
    `
  }
`