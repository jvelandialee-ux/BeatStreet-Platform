function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="bg-dark text-light py-5" data-bs-theme="dark">
      <div className="container">
        <div className="row g-4">

          <div className="col-md-4">
            <p className="h4 fw-bold">Pixel Plaza</p>
            <p className="text-secondary mb-0">
              Plataforma dedicada a las personas entusiasmadas por la cultura hip hop.
            </p>
          </div>

          <div className="col-6 col-md-4">
            <p className="fw-bold">Navegación</p>
            <ul className="list-unstyled mb-0">
              <li><a className="link-light text-decoration-none" href="#inicio">Inicio</a></li>
              <li><a className="link-light text-decoration-none" href="#categorias">Categorías</a></li>
              <li><a className="link-light text-decoration-none" href="#destacados">Destacados</a></li>
              <li><a className="link-light text-decoration-none" href="#novedades">Novedades</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-4">
            <p className="fw-bold">Equipo</p>
            <ul className="list-unstyled text-secondary mb-0">
              <li>Juan Esteban Velandia Lee</li>
              <li>Ingenieria Web II</li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        <p className="text-secondary small text-center mb-0">
          © {anio} BeatStreet Platform. Y que la cultura HipHop siga viva en los videojuegos.
        </p>
      </div>
    </footer>
  )
}

export default Footer