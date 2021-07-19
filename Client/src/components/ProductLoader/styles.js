import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 225px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const AvatarWrap = styled.div`
padding: 16px;
border-radius: 12px;
background: #FEFEFE;
border: 1.17666px solid #F3F0FE;
margin-bottom: 8px;
width: 100%;
`

export const Price = styled.div`
width: 25%;
`
export const Title = styled.div`
width: 80%;
`

export const Loader = styled.div`
  .avatar {
  width: 100%;
  height: 92px;
  background-color: #ccc;
  border-radius: 25%;
  background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);
  background-size: 600px;
  animation: shine-avatar 2s infinite ease-out;
}

.line {
  width: 100%;
  height: 16px;
  margin-top: 12px;
  border-radius: 7px;
  background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);
  background-size: 600px;
  animation: shine-lines 2s infinite ease-out;
}

.avatar + .line {
  margin-top: 11px;
  width: 100px;
}

.line ~ .line {
  background-color: #ddd;
}

@keyframes shine-lines {
  0% {
    background-position: -100px;
  }
  40%, 100% {
    background-position: 140px;
  }
}
@keyframes shine-avatar {
  0% {
    background-position: -32px;
  }
  40%, 100% {
    background-position: 208px;
  }
}
`