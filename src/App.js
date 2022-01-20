import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Stories from './components/pages/Stories'
import Faces from './components/pages/Faces'
import Music from './components/pages/Music'
import About from './components/pages/About'
import SignUp from "./components/pages/SignUp";


function App() {
  return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/stories" component={Stories} />
					<Route path="/faces"  component={Faces} />
					<Route path="/music"  component={Music} />
					<Route path="/about"  component={About} />
					<Route path="/sign-up" component={SignUp} />
				</Switch>
			</Router>
		</>
  );
}

export default App;


