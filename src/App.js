import React from "react";
//import Navigation from './components/navigation';
//import HomeAbout from './components/homeaboutsection';
//import Titles from './components/titles';
//import Register from './components/register';
import GeneralInfo from './components/generalinfo';
import ProdcutInfo from './components/productinfo';
import css from './App.css';
class App extends React.Component {
	render() {
		return( 
        <div className="row">
        <ProdcutInfo />
        </div>
   )
       
    }
}
export default App;
