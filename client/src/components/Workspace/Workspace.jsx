import { NavLink } from "react-router-dom"

export const Workspace = (props) => {
  return (
    <div className='mt-5 py-3'>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <NavLink
            className='nav-link active px-5 text-bg-primary'
            aria-current='page'
            to={"#"}
          >
            {props.title}
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
