import { NavLink } from "react-router-dom"

export const Workspace = ({ title, content }) => {
  return (
    <div className='mt-5 py-3'>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <NavLink
            className='nav-link active px-5 text-bg-primary'
            aria-current='page'
            to={"#"}
          >
            {title}
          </NavLink>
        </li>
      </ul>
      <tbody className='nav-content mt-5'>
        <tr>
          <th className='d-flex mt-5'>{content}</th>
        </tr>
        <tr>
          <td>{content}</td>
        </tr>
      </tbody>
    </div>
  )
}
