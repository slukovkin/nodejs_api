import { Routes, Route } from "react-router-dom"
import { Header } from "./Header/Header"
import { Register } from "./Register/Register"
import { Login } from "./Login/Login"

const URL = "http://localhost:3003/api/user"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' />
        <Route path='/register' element={<Register url={URL}/>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
