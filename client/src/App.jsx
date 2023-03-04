import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { env } from "../../config/config"
import { Register } from "./components/Register/Register"
import { Login } from "./components/Login/Login"
import { WorkMenu } from "./components/WorkMenu/WorkMenu"
import { Options } from "./components/Options/Options"
import { Workspace } from "./components/Workspace/Workspace"
import "./App.css"

const URL = `http://localhost:${env.PORT}/api/user`
const LOGIN = `http://localhost:${env.PORT}/api/login`

export const App = () => {
  const [islogin, setIsLogin] = useState(true)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState([])

  return (
    <>
      {islogin && <WorkMenu isLogin={setIsLogin} setTitle={setTitle} setContent={setContent} /> }

      <Routes>
        <Route
          path='/'
          element={!islogin && <Login url={LOGIN} setIsLogin={setIsLogin} />}
        />

        <Route
          path='/register'
          element={<Register url={URL} setIsLogin={setIsLogin} />}
        />
        <Route path='/options' element={islogin && <Options />} />
        <Route
          path='/workspace'
          element={title && <Workspace title={title} content={content} />}
        />
      </Routes>
    </>
  )
}
