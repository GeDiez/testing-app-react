import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import 'bulma'

function App() {
  const [isLogged, setAsLogged] = useState(false)
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  function loginUser({email, password}) {
    if (email === 'gibran@bedu.org' && password === '12345678') {
      return setAsLogged(true)
    }

    if (email !== 'gibran@bedu.org') {
      setErrors((errors) => ({...errors, email: 'Email incorrect'}))
    }

    if (password !== '12345678') {
      setErrors((errors) => ({...errors, password: 'Password incorrect'}))
    }
  }

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
            {!isLogged &&
              <Login onSubmit={loginUser} errors={errors} />
            }
            {
              isLogged && (
                <h2 className="is-size-4 has-text-success">
                  You are logged in successfully
                  <span class="icon ml-4">
                    <i class="fas fa-check-circle"></i>
                  </span>
                </h2>
              )
            }
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
