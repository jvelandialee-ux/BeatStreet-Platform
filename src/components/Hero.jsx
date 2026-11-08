function Hero() {
  return (
    <section id="inicio" className="bg-primary-subtle py-5">
      <div className="container py-lg-5">
        <div className="row align-items-center g-5">

          <div className="col-lg-6">
            <h1 className="display-4 fw-bold">
              Todo lo relacionado a la cultura HipHop en Videojuegos
            </h1>
            <p className="lead my-4">
            Descubre los ultimos lanzamientos, clasicos y recomendaciones de este genero.
            Te invitamos a explorar por categorias y disfrutar de cada uno de nuestros titulos

            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#destacados" className="btn btn-primary btn-lg">
                Ver Juegos Destacados
              </a>
              <a href="#categorias" className="btn btn-outline-dark btn-lg">
                Explorar Categorías
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <img
              src="\public\bboy.jpg"
              alt="Portada de Bboy, el videojuego destacado"
              className="img-fluid w-100 rounded-4 shadow-lg hero-img"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero