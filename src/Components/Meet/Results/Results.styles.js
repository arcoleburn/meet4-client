import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  h3{
    
  }
`


export const Content = styled.div`
border: 1px solid black;
border-radius: 10px;
margin: 10px;
display:flex;
flex-direction: column;
align-items: center;
img{
  border-radius: 10px;
  width: 75vw;
  height: 75vw;
  object-fit: cover;
}

p{
  align-self: flex-start;
  margin: 0;
  margin-left: 10vw;
  margin-bottom: 5px;
  :nth-child(odd){
    font-weight: bold;
  }
}

.controls{
  width: 100%;
  display: flex;
  flex-direction:row;
  justify-content: space-around;
  margin: 10px;
  button{
    border-radius: 10px;
  }
}
`