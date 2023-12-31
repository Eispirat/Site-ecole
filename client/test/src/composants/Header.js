import React from 'react'
import Service from '../Pages/Presentation';
import logo from "C:/Users/elhaf/OneDrive/Bureau/projet/client/test/src/composants/logo.jpg"
import Home from '../Pages/Accueil.js'
import { Link } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';
import './title.css';
import './WREXHAM_.TTF'



const Header = () => {
  return (
      
    <div>
      <p>
        
      <nav class="bg-white ring-1 ring-b-black shadow-xl">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" class="flex items-center">
        <img src={ logo } class="h-8 mr-2" alt="La fontaine logo" />
        <link rel="stylesheet" type="text/css" href="./title.css"></link>
        <span class="wrexham-font self-center text-2xl font-semibold whitespace-nowrap text-red-600">La Fontaine</span>
    </Link>
    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Accueil</Link>
        </li>
        
        <li>
          <Link to="/Service"   class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Présentation de l'école</Link>
        </li>
        <li>
          <Link to="/Contact" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
        </li>
        <li>
          
        <Dropdown label="Espaces d'utilisateurs" inline>
      <Link to="/"><Dropdown.Item>Espace Administration</Dropdown.Item></Link>
      <Dropdown.Item>Espace Elève</Dropdown.Item>
    </Dropdown>
        </li>
        <li>
        <Dropdown label="Cycles d'éducation" inline>
      <Dropdown.Item>Maternelle</Dropdown.Item>
      <Dropdown.Item>Primaire</Dropdown.Item>
      <Dropdown.Item>College</Dropdown.Item>
      <Dropdown.Item>Lycee</Dropdown.Item>
    </Dropdown>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </p>
    </div>
  )
}
export default Header;