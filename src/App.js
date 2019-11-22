import React from 'react';
import './App.css';

function App() {
  const listeUser = [
    {id: 1, nom: "Boubacar"},
    {id: 1, nom: "Amina"}
  ]

  return (
    <div className="App">
        <h1>Liste clients</h1>
        <ul>
          {
          listeUser.map((user, id) => <li key={id}>{user.nom}</li>)
          }
        </ul>
        <form>
          <input type="text" placeholder="Ajouter utilisateurs"/>
          <button>Confirmer</button>
        </form>
    </div>
  );
}

export default App;
