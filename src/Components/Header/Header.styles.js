import styled from 'styled-components'

export const HeaderWrapper = styled.nav`
background-color: lightblue;
border-bottom: black 4px solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
   padding: 0 15px 0 15px;
  a.title{
    justify-self: center;
  }
img{
  width: 50px;
}

`
export const Logout = styled.div`
display: flex;
flex-direction: column;
align-items:flex-end;
p{
  margin:0;
}
`

export const Login = styled.div`
align-items:flex-end;

`

