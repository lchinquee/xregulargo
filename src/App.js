import React, { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import About from './components/About';
import './App.css';

function App() {
  // Categories for header navigation
  const [categories] = useState([
    {
      name: 'About Me',
      description: 'General information about Leslie ChinQuee'
    },
    {
      name: 'Portfolio',
      description: 'Projects that Leslie has completed'
    },
    { name: 'Resume', description: "Leslie ChinQuee's Resume link and list of skills" }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          {!contactSelected ? (
            <>
              <About></About>
              <Project></Project>
            </>
          ) : (
            <ContactForm></ContactForm>
          )}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
