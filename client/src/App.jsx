import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { env } from "../../config/config"
import { Register } from "./components/Register/Register"
import { Login } from "./components/Login/Login"
import { WorkMenu } from "./components/Menu/Menu"

import "./App.css"

const URL = `http://localhost:${env.PORT}/api/user`
const LOGIN = `http://localhost:${env.PORT}/api/login`

export const App = () => {
  const [islogin, setIsLogin] = useState(false)

  return (
    <>
      {islogin ? (
        <WorkMenu isLogin={setIsLogin} />
      ) : (
        <Login url={LOGIN} setIsLogin={setIsLogin} />
      )}

      <Routes>
        <Route path='/' />
        <Route path='/register' element={<Register url={URL} />} />
        <Route path='/login' element={<Login url={LOGIN} />} />
      </Routes>
    </>
  )
}
