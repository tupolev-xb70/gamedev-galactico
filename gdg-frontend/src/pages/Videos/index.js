import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';
import Pulse from 'react-reveal/Pulse';

import './styles.css'
import logo from '../../assets/logoNew.png'
import twitter from '../../assets/socials/twitter.png'
import youtube from '../../assets/socials/youtube.png'
import discord from '../../assets/socials/discord.png'
import instagram from '../../assets/socials/instagram.png'

// import gamedevImg from '../../assets/gamedev.png'

export default function Videos() {
    return (
        <div className="home-container">
            <section className="form">
                <div className="logo-text">
                    <HeadShake>
                        <div className="title">
                            <h1>Videos</h1>
                        </div>
                        <div className="title-logo">
                            <img src={logo} alt="GameDev Galactico" width="118" height="100"></img>
                        </div>
                    </HeadShake>
                </div>
                <div className="desc-text">
                    <Pulse>
                        <p>Me manda um tweet, veja o Git Galáctico ou acesse nosso Discord.</p>
                        <p>Estamos na maioria das redes sociais, é só mandar um oi :)</p>
                    </Pulse>
                </div>
                <div className="socials">
                    <Fade bottom big>
                        <a href="https://www.twitter.com/mathews_gamedev">
                            <img src={twitter} alt="Twitter" width="100" height="100"></img>
                        </a>
                        <a href="https://www.youtube.com/c/OGuiadoGameDevdasGaláxias">
                            <img src={youtube} alt="Youtube" width="100" height="100"></img>
                        </a>
                        <a href="https://www.discord.gg/kEjJ8ax">
                            <img src={discord} alt="Discord" width="100" height="100"></img>
                        </a>                        
                        <a href="https://www.instagram.com/mathews_gamedev">
                            <img src={instagram} alt="Instagram" width="100" height="100"></img>
                        </a>
                    </Fade>
                </div>
            </section>
            <section className="cursos">

            </section>
        </div>

    )
}
