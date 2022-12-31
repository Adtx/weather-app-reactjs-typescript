import styled from "styled-components"

export const Header = styled.header`
  align-items: center;
  background-color: #283137;
  display: flex;
  height: 7vh;
  justify-content: center;
  width: 100%;
`

export const Title = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
`

export const StyledWeatherApp = styled.main`
  align-items: center;
  background-color: #5f7786;
  box-shadow: 0 1px 6px 2px rgba(28, 33, 39, 0.1);
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: auto;
  width: 35vw;

  @media (max-width: 1150px) {
    width: 45%;
  }

  @media (max-width: 950px) {
    width: 50%;
  }

  @media (max-width: 750px) {
    width: 65%;
  }

  @media (max-width: 520px) {
    width: 100%;
  }
`

export const InputArea = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 10%;
  width: 80%;
`

export const LoadingMessage = styled.h2`
  color: #fff;
  font-size: 3rem;
  margin-top: 25%;
  text-align: center;
  width: 60%;
`
