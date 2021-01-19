import styled from 'styled-components'

export const RegLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;

img{
  object-fit: cover;
  max-width: 80%;
  max-height: 33%;
  align-self: center;
}

a{
  align-self: center;
  font-size: 14px;
  margin: 10px;
}
@media all and (min-width: 700px){
  max-width: 50vw;
 
}
`