import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid">
      <div class="navbar-brand">OUR FAVORITE <br/> MUSIC ARTISTS </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Artist1">One Republic</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Artist2">Ed Sheeran</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Artist3">Blake Shelton</Link>
          </li>
            </ul>
          </div>
      </div>
    </nav>
    
    <Outlet />
    </>
  )
};

export default Layout;