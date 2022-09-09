import React from 'react'

export default function Sidebar() {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="/Content" className="brand-link">
    <img src="dist/img/Logo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Midterm portfolio</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t1.6435-9/47307054_1043514312487146_1205839848200470528_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF521yy8b3BnxEDNCZTgo99nP5HHcwfrmKc_kcdzB-uYjLP8K7P1tMhQhH-jaNoj6JbDKwU7jD9zPxtp8MuvN93&_nc_ohc=JGIOJgJCFs8AX-bpkNR&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT-VlfWD7KxZ-kCquNaUg5RDgWqf-PbFfrOdUVbpzZmp0A&oe=633EA095" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Chayakorn thiamnuch</a>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item menu-open">
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Menu
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./Content" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Home</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./Report" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>About me</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./Dashboard" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Contact</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./gallery" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Gallery</p>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

    </div>
  )
}
