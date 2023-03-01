import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Button from "react-bootstrap/esm/Button"

export const WorkMenu = ({ isLogin }) => {
  const exitHandler = () => {
    isLogin((prev) => !prev)
  }

  return (
    <Navbar bg='dark' expand='lg' fixed='top' variant='dark'>
      <Navbar.Brand href='#home' className="mx-3">Ваша фирма</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <NavDropdown title='Отчёты' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#'>Взаиморасчёты</NavDropdown.Item>
            <NavDropdown.Item href='#'>Взаиморасчёты</NavDropdown.Item>
            <NavDropdown.Item href='#'>Взаиморасчёты</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#'>Взаиморасчёты</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Журналы' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#'>Счета</NavDropdown.Item>
            <NavDropdown.Item href='#'>Расходные накладные</NavDropdown.Item>
            <NavDropdown.Item href='#'>Приходные накладные</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#'>Возвратные накладные</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Справочники' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#'>Склады</NavDropdown.Item>
            <NavDropdown.Item href='#'>Номенклатура</NavDropdown.Item>
            <NavDropdown.Item href='#'>Контрагенты</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#'>Контрагенты</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Button onClick={exitHandler} className="btn-sm mx-3 px-3">Выход</Button>
    </Navbar>
  )
}
