import React, {useState} from 'react'

function Login (props) {
  const {onSubmit, errors} = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  function handleChangeEmail(_email) {
    setEmail(_email)
  }

  function handleChangePassword(_password) {
    setPassword(_password)
  }

  return (
    <div className="box">
      <div className="content">
        <form action="" onSubmit={(ev) => {ev.preventDefault(); onSubmit({email, password})}}>
          <div className="field">
            <label className="label" htmlFor='email'>Email</label>
            <div className="control">
              <input id="email" className={`input ${errors?.email && 'is-danger'}`} name="email" type="email" placeholder="e.g. alexsmith@gmail.com" value={email} onChange={ev => handleChangeEmail(ev.target.value)} />
            </div>
            <p className={`help ${errors?.email && 'is-danger'}`}>{errors?.email}</p>
          </div>

          <div className="field">
            <label className="label" htmlFor='password'>Password</label>
            <div className="control">
              <input id='password' className={`input ${errors?.password && 'is-danger'}`} name="password" type="password" value={password} onChange={ev => handleChangePassword(ev.target.value)} />
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
