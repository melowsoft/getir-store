import styled from "styled-components";
import { media } from "../../styles/style-utils"

export const Container = styled.div`
  width: 25%;
  margin-right: 30px;
  ${
    media.md`
      display: none;
    `
  }
`