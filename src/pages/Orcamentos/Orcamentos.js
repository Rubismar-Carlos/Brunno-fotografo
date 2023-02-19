import './Orcamento.css'

import { Link } from 'react-router-dom'

import { BsDiamondFill, BsCashCoin, BsFillCreditCard2FrontFill, BsCash, BsWhatsapp } from 'react-icons/bs'

import imgLogo from '../../imagem/servicos/img-logo-orcamentos.png'

const Orcamentos = () => {

  const urlWhats = "https://wa.me/5562992789327?text=Ol%C3%A1"

  return (
    <div className='orcamentos'>
      <h1>CONHEÇA OS PACOTES PARA SUA COMEMORAÇÃO.</h1>
      <p>TRANSFORMANDO GRANDES MOMENTOS EM FOTOS.</p>
      <div className="casamentos">
        <div className="info">
            <img src={imgLogo} alt="imagem logo casamento" />
        </div>
        <div className="pacotes-casamentos">

          <div className="box-casamentos">
            <div className="nome-box">
              <h3>DIGITAL SILVER</h3>
              < BsDiamondFill id='icon-silver'/>
            </div>
            <div className="info-casamento">
              <p>COBERTURA COMPLETA DO CASAMENTO (<span>CERIMÔNIA E FESTA</span>)</p>
              <p>MAKING OF NOIVA (<span>OPCIONAL</span>)</p>
              <p>PENDRIVE COM TODOS OS CLICKS DO EVENTO</p>
              <p>2 FOTÓGRAFOS</p>
              <p><span>R$ 2.490,00</span></p>
            </div>
          </div>

          <div className="box-casamentos">
            <div className="nome-box">
              <h3>DIGITAL GOLD</h3>
              < BsDiamondFill id='icon-gold'/>
            </div>
            <div className="info-casamento">
              <p>COBERTURA COMPLETA DO CASAMENTO (<span>CERIMÔNIA E FESTA</span>)</p>
              <p>MAKING OF NOIVA (<span>OPCIONAL</span>)</p>
              <p>PENDRIVE COM TODOS OS CLICKS DO EVENTO</p>
              <p>PRE-WEDDING - TODOS OS CLICKS DO ENSAIO</p>
              <p>2 FOTÓGRAFOS</p>
              <p><span>R$ 3.020,00</span></p>
            </div>
          </div>
        </div>

        <div className="books">
        <div className="box-casamentos">
            <div className="nome-box">
              <h3>BOOK SILVER</h3>
              < BsDiamondFill id='icon-silver'/>
            </div>
            <div className="info-casamento">
              <p>COBERTURA COMPLETA DO CASAMENTO (<span>CERIMÔNIA E FESTA</span>)</p>
              <p>MAKING OF NOIVA (<span>OPCIONAL</span>)</p>
              <p>PENDRIVE COM TODOS OS CLICKS DO EVENTO</p>
              <p>ÁLBUM 25X30 COM 100 FOTOS 50 PÁGINAS</p>
              <p>2 FOTÓGRAFOS</p>
              <p><span>R$ 3.940,00</span></p>
            </div>
          </div>

          <div className="box-casamentos">
            <div className="nome-box">
              <h3>BOOK GOLD</h3>
              < BsDiamondFill id='icon-gold'/>
            </div>
            <div className="info-casamento">
              <p>COBERTURA COMPLETA DO CASAMENTO (<span>CERIMÔNIA E FESTA</span>)</p>
              <p>MAKING OF NOIVA (<span>OPCIONAL</span>)</p>
              <p>PENDRIVE COM TODOS OS CLICKS DO EVENTO</p>
              <p>PRE-WEDDING - TODOS OS CLICKS DO ENSAIO</p>
              <p>ÁLBUM 30X30 COM 130 FOTOS 65 PÁGINAS</p>
              <p>2 FOTÓGRAFOS</p>
              <p><span>R$ 4.770,00</span></p>
            </div>
          </div>

          <div className="box-casamentos">
            <div className="nome-box">
              <h3>BOOK DIAMOND</h3>
              < BsDiamondFill id='icon-diamond'/>
            </div>
            <div className="info-casamento">
              <p>COBERTURA COMPLETA DO CASAMENTO (<span>CERIMÔNIA E FESTA</span>)</p>
              <p>MAKING OF NOIVA (<span>OPCIONAL</span>)</p>
              <p>PENDRIVE COM TODOS OS CLICKS DO EVENTO</p>
              <p>PRE-WEDDING - TODOS OS CLICKS DO ENSAIO</p>
              <p> ÁLBUM 30X40 COM 150 FOTOS - 75 PÁGINAS</p>
              <p>2 FOTÓGRAFOS</p>
              <p><span>R$ 5.170,00</span></p>
            </div>
          </div>
        </div>

        <div className="extras">
        <div className="box-casamentos">
            <div className="nome-box">
              <h3>EXTRAS</h3>
              < BsDiamondFill id='icon-extra'/>
            </div>
            <div className="info-casamento">
              <p>MAKING OF NOIVO - <span>R$ 300,00</span></p>
              <p>PAINEL 50X75 - <span>R$ 250,00</span></p>
              <p>PAINEL 60X90 - <span>R$ 300,00</span></p>
              <p>PAINEL 60X120 - <span>R$ 400,00</span></p>
              <p>ESTOJO P/ ÁLBUM - <span>R$ 250,00</span></p>
              <p>MINI ÁLBUM - <span>R$ 300,00</span></p>
              <p>CASAMENTO CIVIL - <span>R$ 300,00</span></p>
              <p>FOTÓGRAFO ADICIONAL - <span>R$ 450,00</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className='box-pagamento'>
        <h2>FORMAS DE PAGAMENTOS</h2>
        <p>CONHEÇA NOSSAS FORMAS DE PAGAMENTOS</p>
        <div className="boxer-pag">
          <div className='box-pag'>
            <BsCashCoin className='icon-cash'/> <p>À VISTA, NO FECHAMENTO DO CONTRATO, COM 10% DE DESCONTO</p>
          </div>
          <div className='box-pag'>
            <BsCash className='icon-cash2'/><p>PARCELAMENTO EM CONTRATO COM ENTRADA E RESTANTE ATÉ A SEMANA DO CASAMENTO</p>
          </div>
          <div className='box-pag'>
            <BsFillCreditCard2FrontFill className='icon-card'/> <p>PARCELAMOS EM ATÉ 12X NO CARTÃO COM ACRÉSCIMO DO BANCO</p>
          </div>
        </div>
      </div>
      <div className="box-contato">
        <h2>GOSTARIA DE FAZER UM <span>BOOK</span>, OU TEM DÚVIDAS? </h2>
        <h2>ME CHAMA NO <span>WHATSAPP!</span></h2>
        <div className="boxer-cot">
          <div className="box-cot">
            <Link to={urlWhats} target="_blank">
              < BsWhatsapp />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orcamentos