import React from 'react';

import { HashRouter,BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer/Footer';
import ModalCollections from './components/ModalCollections';
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from './components/ScrollToTop';
import GlobalStyle, { MainContainer } from "./globalStyles";
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ProductList from './pages/ProductList/ProductList';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        <ScrollToTop/>
        <Navbar/>
        <ModalCollections />
        <Switch>
          <MainContainer>
            <Route path="/" exact component={ProductList}/>
            <Route path="/product/:productId" component={ProductDetails}/>
          </MainContainer>
        </Switch>
        <Footer/>
      </Router>    
    </>
  );
}

export default App;
