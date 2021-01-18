import styled from 'styled-components' 

export const ItemWrapper = styled.div`

border: 1px solid black;

border-radius: 10px;
padding: 5px;
margin: 10px;

display: flex;
flex-direction: row;
justify-content: space-around;

.controls{
  display: flex;
  flex-direction: column;
  
}
button{
  border-radius: 10px;
}
`