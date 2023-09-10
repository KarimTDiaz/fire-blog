import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,*::after,*::before{
    box-sizing: border-box;
}
img{
	max-width: 100%;
	display: block;
}
ul {
	list-style: none;
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;
  }
a {
	text-decoration: none;
	color: inherit;
  }
body {
	margin: 0;
    max-width:1440px;
    margin-left: auto;
    margin-right: auto;
	font-family: 'Inter', sans-serif;
}

select {
  // A reset of styles, including removing the default dropdown arrow
  /* appearance: none; */
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;

  // Stack above custom arrow
  z-index: 1;

 

  // Remove focus outline, will add on alternate element
  outline: none;
}
`;

export { GlobalStyle };
