import styled from 'styled-components'

export const HomeWrapper = styled.div`
  
  *{
  margin:0;
  padding:0;
  box-sizing:border-box;
  place-items: center;
}
  width:100%;
  height: 60vh;
  background-color:#fff;
  display:grid;
  grid-template-columns: 40% 40%;
  grid-row: auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-content: center;
  margin-top: 8vh;
  a{
    background-color:#333;
    padding:20px;
    border-radius:10px;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:32px;
    font-family:sans-serif;
  }

  
`