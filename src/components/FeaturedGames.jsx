import GameCard from './Gamecard.jsx'

const juegos = [
  {
    id: 1,
    nombre: 'Dj Hero',
    genero: 'Djing',
    descripcion: 'Un clásico icónico de los creadores de Guitar Hero que utiliza un periférico con tornamesa y crossfader para hacer scratches y mezclas de temas reales de artistas como Daft Punk o Eminem.',
    imagen: '/public/djhero.jpg',
  },
  {
    id: 2,
    nombre: 'Def Jam:Rapstar',
    genero: 'Mcing',
    descripcion: 'Un juego musical de estilo karaoke enfocado puramente en el rap, donde rimabas canciones reales e incluso podías grabar tus propios videos de freestyle',
    imagen: '/public/defjamrapstar.jpg',
  },
  {
    id: 3,
    nombre: 'Bboy (2006)',
    genero: 'Breakin',
    descripcion: 'el simulador de break dance más realista y fiel a la cultura hip-hop jamás creado, enfocado por completo en el arte del breaking.',
    imagen: '/public/bboy.jpg',
  },
  {
    id: 4,
    nombre: 'marc eckos getting up',
    genero: 'Graffiti',
    descripcion: 'Sigues a Trane, un grafitero "toy" (principiante) en la ciudad distópica de New Radius que lucha contra el gobierno y bandas rivales para convertirse en una leyenda ',
    imagen: '/public/Getting_Up.jpg',
  },
  {
    id: 5,
    nombre: 'Incredibox',
    genero: 'Beatboxing',
    descripcion: 'Incredibox es un videojuego musical e interactivo en el que diriges a tu propio grupo de beatboxers animados para crear ritmos de forma rápida y divertida.',
    imagen: '/public/incredibox.jpg',
  },
  {
    id: 6,
    nombre: 'Grand Theft Auto: San Andreas',
    genero: 'Knowledge Hip-Hop',
    descripcion: ' El viaje del protagonista, CJ, expone las dinámicas descarnadas de las calles: la epidemia del crack destruyendo los barrios desde dentro, la brutalidad de la policía corrupta (C.R.A.S.H.) y la trampa del falso éxito criminal.',
    imagen: '/public/grandtheft.jpg',
  },
]

function FeaturedGames() {
  return (
    <section id="destacados" className="py-5 bg-white border-top border-bottom">
      <div className="container py-lg-4">
        <h2 className="fw-bold mb-2">Juegos destacados</h2>
        <p className="text-secondary mb-4">
          Una selección para empezar a jugar hoy mismo.
        </p>

        <div className="row g-4">
          {juegos.map((juego) => (
            <div className="col-12 col-md-6 col-lg-4" key={juego.id}>
              <GameCard
                nombre={juego.nombre}
                genero={juego.genero}
                descripcion={juego.descripcion}
                imagen={juego.imagen}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedGames