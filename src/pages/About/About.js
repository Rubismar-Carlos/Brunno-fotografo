import './About.css'

import { BsWhatsapp } from 'react-icons/bs'

import { Link } from 'react-router-dom'

import imgBrunno from '../../imagem/Brunno.png'

const About = () => {

  const urlWhats = "https://wa.me/5562992789327?text=Ol%C3%A1"

  const nome = "BRUNNO CARVALHO"

  return (
    <div className='box-about'>
      <div className='box-about-img'>
        <img src={imgBrunno} alt="Imagem fotografo" />
      </div>
      <div className='box-about-txt'>
        <h1>{nome}</h1>
        <div>
          <p>DESDE 2017 ATUANDO  COMO FOTÓGRAFO PROFISSIONAL E POSSO DIZER QUE A FOTOGRAFIA É MINHA PAIXÃO E COM ELA CONTO HISTÓRIAS ÚNICAS E EMOCIONANTES. TENHO O PRIVILÉGIO DE CAPTURAR OS MOMENTOS MAIS ESPECIAL E IMPORTANTES NA VIDA DAS PESSOAS.</p>
          <p>A FOTOGRAFIA DE CASAMENTOS É ONDE ME IDENTIFICO E POSSO MOSTRAR TODA MINHA CRIATIVIDADE E SENSIBILIDADE PARA CONTAR A HISTÓRIA DE AMOR DE UM CASAL. CADA DETALHE É IMPORTANTE.</p>
          <p>MINHA ABORDAGEM É DISCRETA E NATURAL. GOSTO DE FOTOGRAFAR MOMENTOS ESPONTÂNEOS SEM INTERFERIR NO FLUXO DO EVENTO, E TRABALHAR COM OS NOIVOS PARA CRIAR UMA VISÃO PERSONALIZADA DE SUA HISTÓRIA DE AMOR. ALÉM DISSO, CRIO UMA CONEXÃO COM OS NOIVOS ANTES DO EVENTO, PARA QUE ELES SE SINTAM CONFORTÁVEIS E Á VONTADE DURANTE AS SESSÕES DE FOTOS.</p>
        </div>
        <div className="about-ctt">
          <h2>ENTRE EM CONTATO VAMOS FAZER UM <span>BOOK</span></h2>
          <div className="box-about-ctt">
            <Link to={urlWhats} target="_blank">
              < BsWhatsapp />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About