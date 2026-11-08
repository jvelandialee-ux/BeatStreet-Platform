function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark sticky-top" data-bs-theme="dark">
      <div className="container">
      <a className="navbar-brand fw-bold" href="#inicio">
      Beat Street Platform
      </a>

      <button
      className="navbar-toggler"
      type="button"
        data-bs-toggle="collapse"
        data-bs-target="menuPrincipal"
        aria-controls="menuPrincipal"
        aria-expanded="false"
        aria-label="Abrir menú de navegación"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="menuPrincipal">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">   
        <a className="nav-link" href="#inicio">Inicio</a>
          </li>
          <li className="nav-item"> 
            <a className="nav-link" href="#categorias">Categorias</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#destacados">Destacados</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#novedades">Novedades</a>
                </li>
                </ul>
        </div>          
    </div>
    </nav>
    )
}

export default Navbar
   
