import Landing from './landing';
import Main from './main';
import About from './about';
import Contact from './contact';
import hrLine from './hrLine';
import ThisSite from './thisSite';
import ToggledMenu from './toggledMenu';
import Menu from './menu';
import { React, useState, useEffect} from 'react';

import '../index.css';

function Home(props) {
  const [menuToggled, setMenuToggled] = useState(false);

  function toggleMenu() {
    if (menuToggled) {
      setMenuToggled(false);
    }
    else {
      setMenuToggled(true);
    }
  }

  function closeMenu() {
    setMenuToggled(false);
  }

  return (
    <>
    <Menu toggleMenu={toggleMenu}/>
    {(menuToggled)?<ToggledMenu closeMenu={closeMenu}/>:null}
    <div className="home">        
      <Landing />
      <div className="horizontal-line-container">
        <div className="horizontal-line"></div>
      </div>
      <About />
      <div className="horizontal-line-container">
        <div className="horizontal-line"></div>
      </div>
      <Main entryMenu={props.entryMenu} pizzaMenu={props.pizzaMenu} pastaMenu={props.pastaMenu} drinkMenu={props.drinkMenu}/>
      <div className="horizontal-line-container">
        <div className="horizontal-line"></div>
      </div>
      <Contact />
      <div className="horizontal-line-container">
        <div className="horizontal-line"></div>
      </div>
    </div>
    </>
  );
}

export default Home;
