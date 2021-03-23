import styled from 'styled-components';

const FavoritesGrid = styled.div`

display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 1em;;

padding: 10px;

`
const Wrapper = styled.div`
h3{
  text-align: center;
}

`
export {FavoritesGrid, Wrapper}