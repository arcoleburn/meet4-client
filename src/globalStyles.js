import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Chela+One&display=swap');


:root{
  //colors and font sizes here

  --offWhite: #eef0f2;
  --redish: #ffb3ae;
  --gunmetal: #292f36;
  --teal: #508991;



  --fontSuperBig: 2.5rem;
  --fontBig: 1.5rem;
  --fontMed: 1.2rem;
  --fontSmall: 1rem;
  --fontTiny:.8rem;

}


body{
  font-family: 'Chela One',cursive;
  background-image: linear-gradient(180deg, white, var(--teal));
  height: 100%;
  min-height: 100vh;

a{
  text-decoration: none;
  color: black;
  :hover{
    color: grey
  }
}
}

` 