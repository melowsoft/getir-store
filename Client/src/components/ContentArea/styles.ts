import styled from "styled-components";
import {media} from "../../styles/style-utils"

export const Container = styled.div`
  display: flex;
  min-height: 150vh;

  ${
    media.md`
    min-height: 100vh;
    `
  }
`