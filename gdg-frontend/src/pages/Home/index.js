import React from 'react'
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';

import './styles.css'

// import gamedevImg from '../../assets/gamedev.png'

export default function Home(){
    return (
        <div className="home-container">
            <section className="form">
                <div className="logo-text">
                    <Jump>
                        <h1>GameDev Galático</h1>
                    </Jump>
                </div>
                <div className="desc-text">
                    <Fade bottom>
                        <p>Aprenda a fazer jogos com guias de altíssima qualidade! Tudo sobre design, programação e design de jogos.</p>
                    </Fade>
                </div>
                
                <form>
                    <Fade bottom>
                        <h1 className="form-desc">Receba um E-Book Grátis</h1>
                        <input placeholder="Seu E-mail" />
                        <button type="submit" className="button">Receber E-Book!</button>
                    </Fade>
                </form>
            </section>
            <section className="cursos">

            </section>
        </div>
        
    )
}