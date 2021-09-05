import React from 'react';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import Header from './components/Header';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Header></Header>
        <Switch>
            <Route exact path="/" component={About}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/portfolio" component={Project}/>
            <Route exact path="/contact" component={ContactForm}/>
            <Route exact path="/resume" component={Resume}/>
        </Switch>
        <Footer></Footer>
    </BrowserRouter>   
  )
}

export default App;
