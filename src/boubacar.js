import React, {Component} from 'react';
import './App.css';

class Boubacar extends Component{

  constructor(){
    super();
    this.state = {
      listeUser : [
        {id: 1, nom: "Boubacar"},
        {id: 1, nom: "Amina"}
      ],
      count: 0,
      nom: "boubacar"
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

export default Boubacar;
