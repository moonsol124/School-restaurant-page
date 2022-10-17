import Landing from './landing';
import Main from './main';
import About from './about';
import Contact from './contact';
import '../index.css';

function Home(props) {
  return (
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
    </div>
  );
}

export default Home;
