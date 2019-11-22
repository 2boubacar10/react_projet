import React, {Component} from 'react';
import Boubacar from './boubacar';
import Rokhaya from './rokhaya';
import './App.css';

class App extends Component{

render(){
  return (
    <div>
      <Boubacar nom="Eminem"/>
      <br/>
      <hr/>
      <br/>
      <Rokhaya nom="Rokhaya"/>
    </div>
   
  );

}
}

export default App;
