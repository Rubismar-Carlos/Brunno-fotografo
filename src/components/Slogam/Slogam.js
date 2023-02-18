import './Slogam.css'

import imgSlogam1 from '../../imagem/servicos/img-slogam1.JPG'
import imgSlogam2 from '../../imagem/servicos/img-slogam2.JPG'
import imgSlogam3 from '../../imagem/servicos/img-slogam3.png'



const Slogam = () => {
  return (

    <div className='box-slogam'>
        <h2>A PESSOA CERTA PARA O MOMENTO CERTO.</h2>
        <p>VEJA MAIS SERVIÇOS</p>
        <div className="container-imgs">
            <div className='box-img'>
                <img src={imgSlogam1} alt="Imagem slogam" />
            </div>
            <div className='box-img'>
                <img src={imgSlogam2} alt="Imagem slogam" />
            </div>
            <div className='box-img'>
                <img src={imgSlogam3} alt="Imagem slogam" />
            </div>
        </div>
    </div>
  )
}

export default Slogam