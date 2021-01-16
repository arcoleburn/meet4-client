import styled from 'styled-components'

export const FormWrapper = styled.form`

display: flex;
flex-direction: column;
align-items: flex-start;

input{
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
}
button{
  width: 50%;
  align-self: center;
}
input,button, select{
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
}
`