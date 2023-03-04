import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Button from "react-bootstrap/esm/Button"
import { NavLink, useNavigate } from "react-router-dom"

export const WorkMenu = ({ isLogin, setTitle, setContent }) => {
  const text = ["Журнал взаиморасчетов", "номер 1", "номер 2"]
  const text1 = "Журнал счетов"
  const text2 = "Журнал приходных накладных"
  const text3 = "Журнал расходных накладных"

  const redirect = useNavigate()

  const exitHandler = () => {
    isLogin(false)
    return redirect("/")
  }

  const content = (evt) => {
    setTitle(evt.target.text)
    setContent(evt.target.title)
  }

  return (
    <Navbar bg='dark' expand='lg' fixed='top' variant='dark'>
      <Navbar.Brand to='#home' className='mx-3'>
        Ваша фирма
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <NavDropdown title='Отчёты' id='basic-nav-dropdown'>
            <NavDropdown.Item>
              <NavLink
                title={text}
                to={"/workspace"}
                onClick={content}
              >
                Взаиморасчёты
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Журналы' id='basic-nav-dropdown'>
            <NavDropdown.Item>
              <NavLink to='/workspace' onClick={content} title={text1}>
                Счета
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink title={text2} to='/workspace' onClick={content}>
                Приходные накладные
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink title={text3} to='/workspace' onClick={content}>
                Расходные накладные
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item to={"/workspace"}>
              Возвратные накладные
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Справочники' id='basic-nav-dropdown'>
            <NavDropdown.Item to={"/workspace"}>Склады</NavDropdown.Item>
            <NavDropdown.Item to={"/workspace"}>Номенклатура</NavDropdown.Item>
            <NavDropdown.Item to={"/workspace"}>Контрагенты</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item to={"/workspace"}>Контрагенты</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Настройки' id='basic-nav-dropdown'>
            <NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to={"/options"}>Общие настройки</NavLink>
              </NavDropdown.Item>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Button onClick={exitHandler} className='btn-sm mx-3 px-3'>
        Выход
      </Button>
    </Navbar>
  )
}
