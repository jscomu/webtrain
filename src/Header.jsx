import { Link } from 'react-router-dom';

function Header() {

  return (

        <ul>
          <li>
            <Link to="/">
              home
            </Link>
          </li>
          <li>
            <Link to="/diary">
              Board
            </Link>
          </li>
        </ul>

  )
}

export default Header