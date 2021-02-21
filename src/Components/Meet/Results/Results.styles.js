import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  h3{
    margin-left: 15px;
  }
`


export const Content = styled.div`
border: 1px solid black;
border-radius: 10px;
margin: 10px;
display:flex;
flex-direction: column;
align-items: center;
background-color: var(--offWhite);
box-shadow: grey 2px 2px 10px;
img{
  border-radius: 10px;
  width: 75%;
  height: 75%;
  object-fit: cover;
}
h2{
  text-align: center;
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