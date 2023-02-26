import axios from "axios"
import { useEffect, useState } from "react"
import cl from "./Register.module.css"

export const Register = ({ url }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passconfirm, setPassConfirm] = useState("")
  const [warning, setWarning] = useState("")
  const [response, setResponse] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
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
              setResponse('')
            },2000)
          })
          .catch((err) => {
            setWarning(err.response.data.error[0].msg)
          })
      : setWarning("Пароли не совпадают")
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }

  const passConfirmHandler = (e) => {
    setPassConfirm(e.target.value)
  }

  return (
    <div className='container'>
      <form className={cl.form} onSubmit={submitHandler}>
        <h2 className='text-center m-3'>Регистрация пользователя</h2>
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
        <button className='btn btn-primary btn-sm'>Зарегистрироваться</button>
      </form>
      <h3 className='text-center text-danger'>{response}</h3>
    </div>
  )
}
