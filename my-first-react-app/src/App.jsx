import './App.css'

function App() {
  return (
      <div>
      <div className="encabezado">
        <h2>404 NOT FOUND</h2>
        </div>
    <section className="contenedor">
        <div className="imagen">
            <img src="https://raw.githubusercontent.com/makeitrealcamp/top-v30/main/challenges/404-not-found-page/assets/scarecrow.png" 
            className="imgs" 
            alt="espantapajaros"
            />
            </div>
        <div className="texto">
            <div className="titulo">
              <h2>I have bad news for you</h2>
              </div>
            <br />
            <br />
            <div className="parrafo">
              The page you are looking for might be removed or is temporarily unavailable
            </div>
            <br />
            <br />
            <br />
            <button className="boton">
              BACK TO HOMEPAGE
            </button>
        </div>
    </section>
    <br />
    <footer>
        Elaborado por Fabian Mendoza - Visita mi cuenta de <a href="https://github.com/facamesi52">GitHub</a>.
      </footer>
      </div>
      
  )
}

export default App
