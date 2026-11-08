const noticias = [
  {
    id: 1,
    etiqueta: 'Lanzamiento',
    colorEtiqueta: 'text-bg-danger',
    fecha: '15 de diciembre de 2026',
    titulo: 'SOULJA BOY RAP EMPIRE: The Game',
    texto: 'Es un juego multijugador en 3D que incluye personalización de combatientes y modos competitivos como Free For All y batallas 1v1, marcando un intento directo de integrar su presencia musical con el entorno del gaming',
    imagen: '/public/souljaboy.jpg',
  },
  {
    id: 2,
    etiqueta: 'Noticia',
    colorEtiqueta: 'text-bg-primary',
    fecha: '29 de Noviembre de 2026',
    titulo: 'Final de la Red Bull BC One 2026',
    texto: 'La Final Mundial de la Red Bull BC One 2026 se celebrará el 29 de noviembre de 2026 en Toronto, Canadá, marcando la primera vez que el país alberga el evento',
    imagen: '/public/redbull.jpg',
  },
  {
    id: 3,
    etiqueta: 'Recomendación',
    colorEtiqueta: 'text-bg-success',
    fecha: '30 de Octubre de 2026',
    titulo: 'Recopilacion de HipHop Usme 2026',
    texto: 'Sabemos que la cultura HipHop es muy amplia y diversa, por eso te traemos una recopilación de los mejores eventos de HipHop en Usme, Bogotá, para que no te pierdas de nada.',
    imagen: '/public/hiphopusme.jpg',
  },
  {
    id: 4,
    etiqueta: 'Lanzamiento',
    colorEtiqueta: 'text-bg-danger',
    fecha: '5 de enero de 2027',
    titulo: 'Wu-Tang: Rise of the Deceiver',
    texto: 'Wu-Tang: Rise of the Deceiver es un próximo videojuego de rol (RPG) de acción cooperativo inspirado directamente en la mística, la música y la filosofía del legendario grupo de rap Wu-Tang Clan.',
    imagen: '/public/wutang.jpg',
  },
]

function News() {
  return (
    <section id="novedades" className="py-5">
      <div className="container py-lg-4">
        <h2 className="fw-bold mb-2">Novedades</h2>
        <p className="text-secondary mb-4">
          Lanzamientos, noticias y recomendaciones de la comunidad.
        </p>

        <div className="row g-4">
          {noticias.map((n) => (
            <div className="col-12 col-lg-6" key={n.id}>
              <article className="card h-100 overflow-hidden shadow-sm">
                <div className="row g-0 h-100">
                  <div className="col-md-4">
                    <img src={n.imagen} alt="" className="news-img" loading="lazy" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <span className={`badge ${n.colorEtiqueta} mb-2`}>{n.etiqueta}</span>
                      <h3 className="h5 card-title">{n.titulo}</h3>
                      <p className="card-text">{n.texto}</p>
                      <small className="text-secondary">{n.fecha}</small>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News