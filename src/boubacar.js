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
      this.state.count += 1;
      console.log(this.state.count);
  }
  



render(){
  return (
    <div className="App">
    <h1>Bonjour {this.props.nom}</h1>
        <button onClick={() => this.addOne()}>Ajouter</button>
    </div>
  );

}
}

export default Boubacar;
