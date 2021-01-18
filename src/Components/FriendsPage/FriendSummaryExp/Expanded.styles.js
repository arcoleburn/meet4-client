import styled from 'styled-components'

export const ExpandedWrapper = styled.div`

display: flex;
flex-direction: column;

.stats{
    font-size:2em;
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

button{
  width: 120px;
  border-radius: 10px;
  align-self: flex-end;
  margin: 5px;

}

`