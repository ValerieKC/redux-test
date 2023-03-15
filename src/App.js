import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";

import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}

html,body{
  margin: 0;
  padding: 0;
}

`;

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
