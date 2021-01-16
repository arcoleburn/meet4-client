import styled from 'styled-components'

export const ProfileWrapper = styled.div`

h3{
  text-align: center;
  margin: 0
}
a{
    background-color:#333;
    padding:10px 15px 10px 15px;
    margin: 5px;
    border-radius:10px;
    color:#fff; 
    font-size:16px;
    font-family:sans-serif;
  }

  .links{
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .stats{
    font-size:4em;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    margin:20px 10px;
    div{
      display:flex;
      flex-direction: column;
      justify-content: center;
      p{
        margin:0;
        text-align: center;
      }
    }
  }

`