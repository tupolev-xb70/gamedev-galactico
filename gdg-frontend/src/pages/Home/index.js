import React, {useState} from 'react'
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';

import './styles.css'
import logo from '../../assets/gameDevGalacticoNome.png'

// import gamedevImg from '../../assets/gamedev.png'

export default function Home(){
    const [email, setEmail] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        window.emailjs.send(
            'default_service',
            'template_hWbVKn93', // email templateId
            {
                email //receiver
            },
            'user_LNYJDXD8PVeA8CZzTQUuD'
        ).then(res => {
            alert('Anotado! Um e-mail será enviado para você em breve.')
        }).catch(err => console.error('Failed to send email. Error: ', err))
        
    }

    return (
        <div className="home-container">
            <section className="form">
                <div className="logo-text">
                    <Jump>
                        {/* <img src={logo} alt="GameDev Galáctico"/> */}
                        <h1>GameDev Galáctico</h1>
                    </Jump>
                </div>
                <div className="desc-text">
                    <Fade bottom>
                        <p>Guias, cursos e</p> 
                        <p>tudo sobre criação de jogos</p>
                    </Fade>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <Fade bottom>
                        <h1 className="form-desc">Deixe seu e-mail para ficar sabendo de novidades</h1>
                        <input placeholder="Seu E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                        <button type="submit" className="button">Quero ficar informado!</button>
                    </Fade>
                </form>
            </section>
            <section className="cursos">

            </section>
        </div>
        
    )
}