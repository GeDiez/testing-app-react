import React, {useState} from 'react'

function Login (props) {
  const {onSubmit, errors} = props

  function handleSubmit(ev) {
    ev.preventDefault();

    // onSubmit()
  }

  return (
    <div className="box">
      <div className="content">
        <form action="" onSubmit={handleSubmit}>
          <div className="field">
            <label className="label" htmlFor='email'>Email</label>
            <div className="control">
              <input id="email" className={`input ${errors?.email && 'is-danger'}`} name="email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </div>
            <p className={`help ${errors?.email && 'is-danger'}`}>{errors?.email}</p>
          </div>

          <div className="field">
            <label className="label" htmlFor='password'>Password</label>
            <div className="control">
              <input id='password' className={`input ${errors?.password && 'is-danger'}`} name="password" type="password" />
            </div>
            <p className={`help ${errors?.password && 'is-danger'}`}>{errors?.password}</p>
          </div>
          <button className="button is-primary" type='submit'>Primary</button>
        </form>
      </div>
    </div>
  )
}

export default Login
