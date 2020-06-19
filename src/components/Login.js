import React from 'react'

const Login = () => {



  return (
    <div className="box">
      <div className="content">
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" />
          </div>
        </div>
        <button class="button is-primary">Primary</button>
      </div>
    </div>
  )
}

export default Login
