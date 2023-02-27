import { Routes, Route } from "react-router-dom"
import { env } from "../../config/config"
import { Header } from "./Header/Header"
import { Register } from "./Register/Register"
import { Login } from "./Login/Login"

const URL = `http://localhost:${env.PORT}/api/user`

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' />
        <Route path='/register' element={<Register url={URL} />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
