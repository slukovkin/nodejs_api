import cl from "./Login.module.css"
import { useState } from "react"

import { NavLink } from "react-router-dom"
import axios from "axios"

export const Login = ({ url, setIsLogin }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [response, setResponse] = useState("")

  const emailHabdler = (evt) => {
    const isEmail = evt.target.value
    setEmail(isEmail.trim())
  }

  const passwordHandler = (evt) => {
    const isPassword = evt.target.value
    setPassword(isPassword)
  }

  const sendDataForm = (evt) => {
    evt.preventDefault()
    axios({
      method: "post",
      url: url,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        setResponse(res.data.message)
        setEmail("")
        setPassword("")
        setIsLogin(true)
      })
      .catch((err) => {
        setResponse(err.response.data.message)
        setEmail("")
        setPassword("")
        setIsLogin(false)
      })
  }

  return (
    <div className='widget'>
      <div className='widget_body'>
        <div className='text-center'>{/* Картинка */}</div>
        <div>
          <form onSubmit={sendDataForm}>
            <h3 className='text-center m-2'>Авторизация</h3>
            <div className='form-group mt-3'>
              <label htmlFor='loginInputEmail'>E-Mail:</label>
              <input
                className='form-control form-control-sm my-2'
                placeholder='Введіть e-mail'
                type='text'
                value={email}
                onChange={emailHabdler}
                autoComplete='false'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='loginInputPassword'>Пароль</label>
              <input
                className='form-control form-control-sm my-2'
                placeholder='Пароль'
                type='password'
                value={password}
                onChange={passwordHandler}
                autoComplete='false'
              />
            </div>
            <div className='form-group text-center'>
              <NavLink to=''>Забыли пароль?</NavLink>
            </div>

            <div className={cl.inline_blocks}>
              <div className={cl.buttons_preview}>
                <button
                  type='submit'
                  className='btn btn-primary btn-sm btn-login-page mx-2 px-5'
                >
                  Войти
                </button>
              </div>
              <div className='form-group text-center mb-2'>
                <NavLink to='register'>Регистрация</NavLink>
              </div>
            </div>
            <div className='text-center'>
              <div>{response}</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
