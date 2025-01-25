import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">
              主页
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              关于
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/operation" className="nav-link">
              操作
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
