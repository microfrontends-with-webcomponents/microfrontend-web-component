import React from "react";
import Routes from "./routes";
import { MemoryRouter  } from "react-router-dom";
import NavbarSecondary from './components/NavbarSecondary';

const App = () => {
  return (
    <MemoryRouter>
      <NavbarSecondary />
      <Routes />
    </MemoryRouter>
  );
};

export default App;
