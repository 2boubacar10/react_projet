import React, {Component} from 'react';
import './App.css';

class Rokhaya extends Component{

  constructor(){
    super();
    this.state = {
      listeUser : [
        {id: 1, nom: "Boubacar"},
        {id: 1, nom: "Amina"}
      ],
      count: 0,
      nom: "Rokhaya"
    }
  }
  



render(){
  return (
    <div className="App">
    <h1>Bonjour {this.state.nom}</h1>
        
    </div>
  );

}
}

export default Rokhaya;
