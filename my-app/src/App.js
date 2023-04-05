import React from 'react'
// import Header from './components/Header'
import './App.css';
// import NavbarComp from './pages/NavbarComp'
// import ProjectStrap from './pages/ProjectStrap'
// import 	Jumbotron from './pages/Jumbotron'
// import Bootstrapreact from './pages/Bootstrapreact'
// import Perent from './pages/Perent'
// batas
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
// import Post from "./pages/Post";
// import Gambar from "./pages/Gambar"
import Stock from "./pages/Stock"
import Customer from "./pages/Customer"
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
// import React, { Component } from 'react';
// batas
// import {useSelector, useDispatch} from 'react-redux'
// import { toggleDarkMode } from './Feature/darkModeSlice';

export const ThemeContext = createContext(null);

function App() {
const [theme, setTheme] = useState("dark");

const toggleTheme = () => {
  setTheme((curr) => (curr === "light" ? "dark" : "light"));
};
	return (
	
			/* <NavbarComp/> */
				/* <Header/> */
			/* <ProjectStrap/> */
			<ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch className="mode" onChange={toggleTheme} checked={theme === "dark"} />
		<Routes>
			<Route element = {<Home/>} path="/"/>
			<Route element = {<About/>} path="/about"/>
			<Route element = {<Counter/>} path= "/counter"/>
			{/* <Route element ={<Post/>} path= "/Post"/> */}
			{/* <Route element ={<Gambar/>}path="/gambar"/> */}
			<Route element = {<Customer/>} path="/customer"/>
			<Route element = {<Stock/>} path="/stock"/>
		</Routes> 
		</div>
      </div>
    </ThemeContext.Provider>
		/* <Bootstrapreact/> */
		/* <Perent/> */
		/* <Counter/> */
	

	);
}

export default App;