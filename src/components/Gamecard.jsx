function GameCard({ nombre, genero, descripcion, imagen }) {
  return (
    <article className="card game-card h-100 shadow-sm">
      <img
        src={imagen}
        className="card-img-top game-img"
        alt={`Imagen del videojuego ${nombre}`}
        loading="lazy"
      />
      <div className="card-body">
        <span className="badge text-bg-primary mb-2">{genero}</span>
        <h3 className="h5 card-title">{nombre}</h3>
        <p className="card-text text-secondary mb-0">{descripcion}</p>
      </div>
    </article>
  )
}

export default GameCard
