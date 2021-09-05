import React from 'react';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import Header from './components/Header';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

// function App() {  
//   const [currentCategory, setCurrentCategory] = useState("about");

//   function renderCategory() {
//     if(currentCategory === "about") {
//       return <About></About>
//     } else if(currentCategory === "portfolio") {
//       return <Project></Project>
//     } else if(currentCategory === "contact") {
//       return <ContactForm></ContactForm>
//     } else if(currentCategory === "resume") {
//       <Resume></Resume>
//     }
//   }
//   return (
//     <div>
//       <main>
//         <Header setCurrentCategory={setCurrentCategory}></Header>
//         <div>
//           {renderCategory()}
//         </div>
//       </main>
//       <Footer></Footer>
//     </div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
        <Header></Header>
        <Switch>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/portfolio">
              <Project></Project>
            </Route>
            <Route exact path="/contact">
              <ContactForm></ContactForm>
            </Route>
            <Route exact path="/resume">
              <Resume></Resume>
            </Route>
        </Switch>
        <Footer></Footer>
    </BrowserRouter>   
  )
}

export default App;
