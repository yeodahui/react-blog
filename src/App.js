import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
	${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      React
    </>
  );
}

export default App;
