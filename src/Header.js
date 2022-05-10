import React  from 'react' 
import logo from './logo.svg';
import './Header.css'


export default function Header(){
    return(
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
  
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    </header>
    )
  }