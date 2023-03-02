import { NavLink } from 'react-router-dom'
import cl from './Header.module.css'

export const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.header__logo}>
        <span>
          <NavLink to={'/'}>LOGO</NavLink>
        </span>
      </div>
      <nav className={cl.header__nav}>
        <ul className={cl.nav__menu}>
          <li className={cl.menu__item}>
            <NavLink to={'register'}>Регистрация</NavLink>
          </li>
          <li className={cl.menu__item}>
            <NavLink to={'login'}>Вход</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}