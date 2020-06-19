import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import 'bulma'

function App() {
  return (
    <section className="hero is-success is-fullheight has-background-grey-dark">
      <div className="hero-body">
        <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <h1 className="title">
              Jest y React Testing Library
            </h1>
            <h2 className="subtitle">
              Probar comportamiento de UI's usando React
            </h2>
            <Login />
          </div>
          <div className="column">
            <div className="content has-text-centered">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default App;
