import { NavLink } from "react-router-dom"

export const Workspace = () => {
  return (
    <div className='mt-5 nav nav-tabs'>
      <div className='nav-item'>
        <NavLink to='#' className='nav-link active'>
          Взвиморасчеты
        </NavLink>
      </div>
      <div className='nav-item'>
        <NavLink
          role='button'
          className='nav-link'
          // tabindex='0'
          to='#'
        >
          Расходные накладные
        </NavLink>
      </div>
      <div className='nav-item'>
        <NavLink
          role='button'
          className='nav-link disabled'
          aria-disabled='true'
          to='#'
        >
          Приходные накладные
        </NavLink>
      </div>
    </div>
  )
}
