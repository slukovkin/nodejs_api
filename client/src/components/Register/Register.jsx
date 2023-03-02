import axios from "axios"
import { useState } from "react"
import { Navigate } from "react-router-dom"

export const Register = ({ url, setIsLogin }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passconfirm, setPassConfirm] = useState("")
  const [warning, setWarning] = useState("")
  const [response, setResponse] = useState("")

  const submitHandler = (evt) => {
    evt.preventDefault()
    password == passconfirm
      ? axios({
          method: "post",
          url: url,
          data: {
            email: email,
            password: password,
          },
        })
          .then((res) => {
            setResponse(res.data.message)
            setEmail("")
            setPassword("")
            setPassConfirm("")
            setWarning("")
            setTimeout(() => {
              setResponse("")
            }, 2000)
          })
          .then(() => {
            setIsLogin(false)
            isAuth()
          })
          .catch((err) => {
            setWarning(err.response.data.error[0].msg)
          })
      : setWarning("Пароли не совпадают")
  }

  const isAuth = () => {
    return <Navigate replace to={'/login'} />
  }

  const emailHandler = (evt) => {
    setEmail(evt.target.value)
  }

  const passwordHandler = (evt) => {
    setPassword(evt.target.value)
  }

  const passConfirmHandler = (evt) => {
    setPassConfirm(evt.target.value)
  }

  return (
    <div className='container widget'>
      <form className='widget_body' onSubmit={submitHandler}>
        <h3 className='text-center m-3'>Регистрация</h3>
        <div className='form-group mb-3'>
          <input
            type='email'
            value={email}
            onChange={emailHandler}
            className='form-control'
            id='email'
            placeholder='Введите email'
          />
          <small id='emailId' className='form-text text-muted'></small>
        </div>
        <div className='form-group mb-3'>
          <input
            type='password'
            value={password}
            onChange={passwordHandler}
            autoComplete='false'
            className='form-control'
            id='password'
            placeholder='Введите пароль'
          />
          <small id='passwordId' className='form-text text-muted'></small>
        </div>
        <div className='form-group mb-3'>
          <input
            type='password'
            value={passconfirm}
            onChange={passConfirmHandler}
            autoComplete='false'
            className='form-control'
            id='password_conf'
            placeholder='Подтвердите пароль'
          />
          <small id='passwordConfirmId' className='form-text text-muted'>
            {warning}
          </small>
        </div>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-primary btn-sm'>Зарегистрироваться</button>
        </div>
        <h5 className='text-center text-danger mt-3'>{response}</h5>
      </form>
    </div>
  )
}
