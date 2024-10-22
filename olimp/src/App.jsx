import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav class="navbar">
        <div class="logo">
          <img src="https://e7.pngegg.com/pngimages/964/159/png-clipart-olympic-rings-olympic-rings.png" alt="Logo" />
        </div>
        <ul class="nav-links">
          <li><a href="#1">Ganador</a></li>
          <li><a href="#2">Medalla</a></li>
          <li><a href="#3">Gabriela Schloesser</a></li>
        </ul>
      </nav>
      <br /><br /><br />
      <center>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ2QOTwiBOWI77y141CyUMT3TvbioOnsVqBS5AQeI0EK4EzF0wq2tEVJeIvPNKbAXhQgFOw_gCOqHYce_U" />
            </div>
            <div class="carousel-item">
              <img src="https://image.volkskrant.nl/205491734/width/2480/gabriela-schloesser-bayardo-en-steve-wijler-links-in-actie" />
            </div>
            <div class="carousel-item">
              <img src="https://storage.googleapis.com/static.elsoldemexico.com.mx/elesto/2024/07/Gabriela-Bayardo-representa-a-Paises-Bajos-en-Paris-2024.-Foto_-gaby.schloesserb.png" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </center><br/>
      <h2 id='1'>Ganador de tiro con arco 2024</h2><br />
      <p>El tiro con arco mexicano ganó su cuarta medalla en la historia de los Juegos Olímpicos. México obtuvo su primera medalla de Paris 2024 en la prueba de equipo femenil de tiro con arco luego de imponerse en tres sets ante Holanda. El primer set fue para el equipo mexicano por 57 puntos sobre 50 de las europeas.</p><br />
      
      <h2 id='2'>¿Cómo ganaron la medalla?</h2><br />
      <p>En el primer duelo del día, en cuartos de final, la victoria mexicana fue sin perder un solo set y mostrando temple en los momentos más complicados para superar a Alemania, un país al que nunca habían vencido y ahora tuvieorn su revancha en Juegos Olímpicos.

En el primer set el equipo mexicano y el representativo alemán, repartieron puntos al sumar 23 unidades en la primera ronda y 27 en la segunda.

El dominio mexicano llegó en el segundo set después de obtener un par de 10 y aprovechar los errores que las alemanas tuvieron en la primera ronda. Las mexicanas quedaron por encima de las europeas, al llegar a los 55 puntos.</p><br />
      
      <img src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0728%2Fr1364570_1296x729_16%2D9.jpg&w=570&format=jpg" alt="" /><br /><br />
      
      <h2 id='3'>Historia de Gabriela Schloesser-Bayardo</h2><br />
      <p>Gabriela Schloesser-Bayardo tiene muy claro que la afición mexicana muestra un resentimiento contra Países Bajos que se exacerbó desde 2014 cuando un penal a favor de la selección holandesa supuso el final de México en la Copa Mundial de fútbol. Aunque es otro deporte, 10 años después del penal, la arquera puede escuchar el grito “no era penal” en su participación en Juegos Olímpicos, pues la mexicana se naturalizó holandesa y chistes como esos ya son comunes.
      En sus segundos Juegos Olímpicos representando a Países Bajos, Gabriela ha encontrado nuevas frustraciones que superar. Es la segunda ocasión que pierde contra la delegación de Corea del Sur, pero si en Tokio 2020 logró alcanzar la plata sin tener que competir contra México, en París 2024, se enfrentó al país que la vio nacer y cayó ante el equipo mexicano en busca del bronce.</p><br />
      
      <h2 id='3'>juegos olimpicos de arqueria 2024</h2><br />
      <p>El torneo de tiro con arco en los Juegos Olímpicos de París 2024 se realizó en la Explanada de Los Inválidos de París del 25 de julio al 4 de agosto de 2024.1​

En total se disputaron en este deporte cinco pruebas diferentes, dos masculinas (individual y equipos), dos femeninas (individual y equipos) y una mixta (dobles).​ El programa de competiciones se mantuvo como en la edición anterior.</p><br />

      <div class="copyright">
        &copy; 2024 Camilo Alejandro Zapata Montero 
      </div>
    </>
  )
}

export default App