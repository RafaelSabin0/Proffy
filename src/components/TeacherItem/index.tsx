import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem () {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/41658000?s=460&u=3f8bbfecaf01778ad489f5fb24ae6619fb3eb458&v=4" alt="Rafael Sabino" />
            <div>
                <strong>Rafael Sabino</strong>
                <span>Música</span>
            </div>
        </header>

        <p>
            Entusiasta das melhores técnicas musicais e também de tecnologia
        <br /><br />
        Apaixonado pela união da música com a tecnologia, minha capacidade de unir esses dois temas em sala já ajudou muitos alunos.
        </p>

        <footer>
            <p>Preço/Hora <strong>R$80,00</strong></p>
            <button type="button">
                <img src={WhatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;