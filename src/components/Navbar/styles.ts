import styled from "styled-components"
import { primaryColor, navbarHeight } from "../../styles/global"

export const Container = styled.div`
   background: ${primaryColor};
   height: ${navbarHeight};
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
   position: fixed;
 `