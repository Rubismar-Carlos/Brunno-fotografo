import './Servicos.css'

import { Link } from 'react-router-dom'

import { motion} from 'framer-motion'

import { useState, useEffect, useRef } from 'react'

import image1 from '../../imagem/servicos/img-tatuador.png'
import image2 from '../../imagem/servicos/img-biomedicina.png'
import image3 from '../../imagem/servicos/img-barbeiro.png'
import image4 from '../../imagem/servicos/img-equipe.png'
import image5 from '../../imagem/servicos/img-escritorio.png'
import image6 from '../../imagem/servicos/img_casamento.png'

const Servicos = () => {

    const images = [image1, image2, image3, image4, image5, image6]

    const [width, setWidth] = useState(0)

    const carousel = useRef()

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])


  return (
    <div id='servicos'>
        <div className='slide'>
            <motion.h1 initial={{x: 300}} animate={{x: 0}} transition={{duration: 1}}>VEJA MAIS SERVIÇOS</motion.h1>
            <motion.div  ref={carousel} className='carousel' whileTap={{ cursor: "grabbing"}}>
                <motion.div className='inner' drag="x" dragConstraints={{ right:0, left: -width}} initial={{x: 200}} animate={{x: 0}} transition={{ duration: 1}}>
                    {images.map((img => (
                        <motion.div className='item' key={img}>
                            <img src={img} alt="imagem profissional" />
                        </motion.div>
                    )))}
                </motion.div>
            </motion.div>
        </div>
        
        <div className="container-btn">
            <div className="box-btn">
                <p>GOSTOU DE ALGUM <span>PROJETO</span>? SOLICITE UM <span>ORÇAMENTO</span>.</p>
                <div>
                    <button id='btn'><Link to="/orcamentos">QUERO UM ORÇAMENTO!</Link></button>
                </div>
            </div>
            <div className='box-btn'>
                <p>OLÁ SOU <span>BRUNNO CARVALHO</span>, GOSTARIA DE ME <span>CONHEÇER</span>?</p>
                <div>
                    <button id='btn'><Link to="/about">CONHECER BRUNNO!</Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Servicos