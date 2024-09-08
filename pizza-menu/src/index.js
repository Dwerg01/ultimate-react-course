import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import logo from "./Pizza Joint Logo.svg";


const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  


function App() {
    return <>
    <Header />
    <Menu />
    <Footer />
    </>
}

function Header() {
  return <img className='logo' src={logo} alt="Pizza Logo" height={"150px"}/>
}

function Menu() {
  return <div>
    <h1 className='header'>Our Menu</h1>
    <ul className='pizzas'>
    {pizzaData.map(pizza => <Pizza key={pizza.name} {...pizza} />)}
    </ul>

    </div>
}

function Pizza(props) {
  return ( 
  props.soldOut ? null : (
  <li className="pizza">
      <img src={props.photoName} alt={props.name}></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>${props.price + 3},00</span>
      </div>
    </li>)
  )}


function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return <footer>
    <div className='order'>
      {new Date().toLocaleTimeString()}
    </div>
    {isOpen ? <Openfooter closeHour={closeHour}/> : ( 
    <div className='order'>
        <p>Sorry, we are closed! <br/>Visit us again at {openHour}:00 in the morning</p>
    </div>)
    }
    </footer>
}


function Openfooter(props) {
  return (
    <div className='order'>
      <p>
        We are open until {props.closeHour}:00! Come visit us or order online
      </p>
      <button className='btn'>Order now!</button>
    </div>
  )
}

// react version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>

    <App />
    </React.StrictMode>
)


