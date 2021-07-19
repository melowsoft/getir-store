import styled from "styled-components";
import {media} from "../../styles/style-utils"

export const Container = styled.div`
width: 100%;
background: #FFFFFF;
box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
border-radius: 2px;
min-height: 70vh;
padding: 20px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-column-gap: 24px;
grid-row-gap: 21px;

  ${
    media.sm`
    grid-template-columns: 1fr 1fr;
    `
  }
`