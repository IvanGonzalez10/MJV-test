import React from "react";
import { GlobalStyle } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { Router } from '@reach/router';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from "./components/Footer/Footer";

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Router>
      <NotFound default />
      <Home path="/" />
    </Router>
    <NavBar />
    <Footer />
  </>
);

