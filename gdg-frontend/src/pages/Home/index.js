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
                <div>
                    <Fade bottom>
                        <p>Aprenda a fazer jogos com guias de altíssima qualidade! Tudo sobre design, programação e design de jogos.</p>
                    </Fade>
                </div>
                
                <form action="">
                    <h1>Receba um E-Book Grátis e aprenda hoje programação e criação de jogos no Unity!</h1>
                    <input placeholder="Seu E-mail" />
                    <button type="submit">Receber E-Book!</button>
                </form>
            </section>
        </div>
        
    )
}