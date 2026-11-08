const categorias = [
    { id: 1, nombre: 'DJing', icono: "🎧", color: "#ffb4a8" , cantidad: 128},
    { id: 2, nombre: 'Graffiti', icono: "🎨", color: "#a8d5ba" , cantidad: 94},
    { id: 3, nombre: 'Breakin', icono: "🕺", color: "#f7d794" , cantidad: 61},
    { id: 4, nombre: 'Mcing', icono: "🎤", color: "#f6e58d" , cantidad: 77},

]

function Categories() {
    return (
        <section id="categorias" className="py-5">
            <div className="container py-lg-4">
                <h2 className="fw-bold mb-2">Explorar por Categorías</h2>
                <p className="text-secondary mb-4">
                    Elige el tipo de juego que más te guste y empieza a disfrutar.
                </p>

                <div className="row g-4">
                    {categorias.map((cat) => (
                        <div className="col-6 col-lg-3" key={cat.id}>
                            <a href="#destacados" className="text-decoration-none">
                                <div className="card cateoria-card h-100 border-0 text-center text-dark"
                                style={{backgroundColor: cat.color}}>

                                    <div className="card-body py-4">
                                        <div className="fs-1" aria-hidden ="true"> {cat.icono}</div>
                                        <h3 className= "h5 fw-bold mt-2 mb-1">{cat.nombre}</h3>
                                        <small>{cat.cantidad} juegos</small>
                                    </div>
                                </div>
                            </a>    
                        </div>
                    ))}
                </div>  
                </div>  
                
                </section>
    )
}   

export default Categories
