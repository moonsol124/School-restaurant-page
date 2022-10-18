import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/menu';
import { React, useState, useEffect } from 'react';
import ToggledMenu from './components/toggledMenu';
import Site from './components/thisSite';

function App() {
  const [menuToggled, setMenuToggled] = useState(false);
  const [entryMenu, setEntryMenu] = useState([{name: 'Melanzane', price: 4, ingredients: 'Rocket, courgette, grilled aubergine, bell pepper, tomato, basil and Parmesan cheese', type:'V'},
  {name: 'Pollo alla Griglia', price: 8, ingredients: 'Grilled chicken, aubergine, bell pepper, rocket and courgette'},
  {name: 'Tonno', price: 14, ingredients: 'Tuna salad, rocket, red onion, capers and parsley', type:'V, GF'},
  {name: 'Bufala a Pomodoro', price: 10, ingredients: 'Buffalo mozzarella, rocket, tomato and pesto'}]); 
  const [pizzaMenu, setPizzaMenu] = useState([{name: 'Margarita', price: 19, ingredients: 'Tomato sauce, Fresh tomatoes, Mozarella cheese, Herbs'},
  {name: 'Meatball Marinara', price: 22, ingredients: 'Extra pork meatballs, onions, herbs and mozzarella cheese, drizzled with even more of our signature tomato sauce', type:'V, GF'},
  {name: 'Mighty Meaty', price: 24, ingredients: 'Red Onions, Pepperoni, Mushrooms, Ham, Ground Beef, Cumberland Sausage', type:'V, GF'},
  {name: 'Pepperoni Passion', price: 27, ingredients: 'Extra Pepperoni and Extra Mozzarella Cheese', type:'V'}]); 
  const [pastaMenu, setPastaMenu] = useState([{name: 'Pasta Bianca', price: 14, ingredients: 'Garlic, red peppers, parsley and olive oil'},
  {name: 'Pomodore', price: 17, ingredients: 'Tomato sauce, cherry tomatoes and basil'},
  {name: 'Verdure', price: 22, ingredients: 'Tomato sauce, mushrooms, bell pepper, courgette, aubergine, black olives, Parmesan cheese and parsley'},
  {name: 'Ai Funghi ', price: 28, ingredients: 'Cream sauce, mushrooms, Parmesan cheese and parsley', type:'V, GF'}]); 
  const [drinkMenu, setDrinksMenu] = useState([{name: 'Le Reveur', price: 49, ingredients: 'White Wine from Southern Rhône, France'},
  {name: 'Le Colture Prosecco', price: 69, ingredients: 'Sparkling Wine from Veneto, Italy'},
  {name: 'Abel Mendoza Viura', price: 89, ingredients: 'White Wine from Rioja, Spain'},
  {name: 'Olivier Leflaive', price: 109, ingredients: 'White Wine from St Aubin, Burgundy, France'}]); 

  // useEffect(() => {
  // }, [menuToggled])

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
    <div className="app">
      <BrowserRouter>
        <Menu toggleMenu={toggleMenu}/>
        {(menuToggled)?<ToggledMenu closeMenu={closeMenu}/>:null}
        <Routes>
          <Route path='/home/' element={<Home entryMenu={entryMenu} pizzaMenu={pizzaMenu} pastaMenu={pastaMenu} drinkMenu={drinkMenu}/>}></Route>
          <Route path='/home/site_info/' element={<Site/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;