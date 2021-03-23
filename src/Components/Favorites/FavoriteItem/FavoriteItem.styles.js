import styled from 'styled-components';

const Wrapper = styled.div`
justify-self: center;
  height: 30vh;

  width: 40vw;

  .img-holder {
    border-radius: 5px;
    height: 75%;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  padding: 3px;
  border: solid black 1px;
  border-radius: 5px;

  p{
    text-align: center;
  }
`;

export { Wrapper };
