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
