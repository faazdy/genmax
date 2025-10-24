import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { itemList, teamMembers, changesUsers } from './data/data'

{/* Components */ }
import Nav from './components/Nav'
import After from './components/After';
import { li } from 'framer-motion/client';




function App() {

  return (
    <>
      <Nav />
      <main>
        <section className="hero">
          <div className="hero-text">
            <h1 className='title'>Transforma tu vida.</h1>
            <h2>Únete a nuestra comunidad y alcanza tu máximo potencial.</h2>
          </div>
          <a href="https://www.skool.com/genmax/about" className='button'>Únete ahora</a>
        </section>

        
        <section className="about" id='about'>
          <div className="section-title">
            <h2 className='title'>Sobre Nosotros</h2>
            <h3>Nuestra misión</h3>
          </div>
          <p>
            Impulsamos la mejora personal y la transformación física y facial en jóvenes a través de una comunidad activa y motivadora. Juntos superamos barreras y logramos resultados excepcionales.
            ¿Listo para dar el siguiente paso? Únete a nuestro grupo exclusivo en WhatsApp y conéctate con otros miembros apasionados que ya comenzaron su camino hacia el éxito personal.
          </p>
          <a href="https://whatsapp.com/channel/0029Vaz8g791yT2FJmfwCf1D" className='button'>Entrar al WhatsApp</a>
        </section>

        <section className="hero-video">
          <video src="/video/presentvideo.mp4" autoPlay muted controls></video>
        </section>
        <hr />
        <section className="glow-up-changes">
          <div className="section-title center">
            <h2 className="title">Grandes Cambios</h2>
            <h3>Resultados Reales</h3>
            <br />
          </div>
          <article className="cards-container-wrapper">
            <div className="cards-container-section">
              {changesUsers.map(user => {
                return <After user={user} key={user.id} />
              })}
            </div>
          </article>
        </section>
        <br />
        <br />
        <br />
        <br />
        <section className="modules" id='modules'>
          {itemList.map(item => {
            return (
              <section className='module-main' key={item.id}>
                <div className="module-text">
                  <h2 className='title'>{item.title}</h2>
                  <p>{item.subtitle}</p>
                  <h3>{item.text}</h3>
                </div>
                <img src={item.img} alt="module" />
              </section>
            )
          })}
          <p className='center'>Y aún hay más!</p>
        </section>
          <hr />
        <section className="members" id='team'>
          <div className="section-title">
            <h2 className="title">Nuestro Equipo</h2>
            <h3>Experiencia y dedicación.</h3>
          </div>
          <article className="member-container">
            {teamMembers.map(member => {
              return (
                <div className="member-card" key={member.id}>
                  <div className="img">
                    <img src={member.img} alt="pic" />
                  </div>
                  <div className="member-info">
                    <h4 className='title'>{member.name}</h4>
                    <div className="social-links">
                      {member.socialLinks.map(link => {
                        return <a href={link.link} key={link.id}>
                          <i className={`bi ${link.icon}`}></i>
                        </a>
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </article>
          <p>
            Detrás de GenMax Academy hay un equipo comprometido, dedicado y respaldado por una comunidad que impulsa nuestro crecimiento cada día.
          </p>
        </section>
          <br />
          <br />
          <br />
        <section className="glow-up">
          <img src="./img/cambios.jpeg" alt="cambios" />
          <div className="glow-up-text center section-title">
            <h2 className='title'>Anímate a cambiar</h2>
            <h3>En la plataforma de Skool encuentras nuestro contenido completo!</h3>
            <a href="https://www.skool.com/genmax/about" className='button'>Únete ahora</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="logo">
          <img src="./img/logo2.png" alt="logo" />
          <p>GenMax Academy</p>
          <p>© 2025 Todos los derechos reservados</p>
        </div>
        <div className="tags">
          <ul>
            <li className='title'>Comunidad</li>
            <li><a href="#root">Inicio</a></li>
            <li><a href="https://whatsapp.com/channel/0029Vaz8g791yT2FJmfwCf1D">WhatsApp</a></li>
          </ul>
          <ul>
            <li className='title'>Recursos</li>
            <li><a href="#team">Equipo</a></li>
            <li><a href="#changes">Resultados</a></li>
            <li><a href="#about">Acerca de GenMax</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default App
