import styled from 'styled-components';

export const DirectionsWrapper = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  margin-bottom: 20px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  p,
  h4 {
    text-align: center;
  }
  h4, p.duration{
    margin-bottom: 0;
    margin-top: 0;
  }
button{
  margin: 10px;
border-radius: 10px;
}
`;
