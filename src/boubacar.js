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

  addOne(){
      this.setState({
          count: this.state.count + 1,
      })
  }
  



render(){
  return (
    <div className="App">
    <h1>Bonjour {this.props.nom}</h1>
    
    <div>Sur le compteur il y'a {this.state.count}</div>
        <button onClick={() => this.addOne()}>Ajouter</button>
    </div>
  );

}
}

export default Boubacar;
