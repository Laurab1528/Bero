import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'

function MessagingSection () {
  return (
    <InnerLayout>
      <h1 className="small-heading">3 Simples pasos</h1>
      <br></br>
      <MessageStyle>
        
        
        <div className='left-items'>          
          
          <br></br>
        <div className='title-para'>Escogencia del inmueble</div>
          <p className='m-para'>
            Seleccionas el proyecto en el que desees invertir.
          </p>
          <br></br>
        </div>
        <div className='left-items'>
          <div className='title-para'>Cantidad para invertir</div>
          <p className='m-para'>
          Eliges la cantidad a invertir. Cada proyecto tiene especificado el monto mínimo y la rentabilidad esperada de la inversión en su descripción.
          </p>
          <br></br>
        </div>
        <div className='left-items'>
          <div className='title-para'>Obtención de la rentabilidad</div>
          <p className='m-para'>
          Recibe la renta mensual por la Compra/Venta o Compra/Renta del proyecto.          </p>
        </div>
      </MessageStyle>
    </InnerLayout>
  )
}

const MessageStyle = styled.section`
  .message-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 1347px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }


  .left-items {
    .title-message{
      display:flex;
      font-size: 4rem;
      align-items: center;
      padding:2rem 0;
      }
    position: relative;
    padding-right: 2rem;
    .m-para {
      padding: 1rem 0;
    }
    .title-para {
        font-size: 2rem;
        color:  black:
        padding: 1rem 0;
      }
    .images-con {
      display: flex;
      align-items: center;
      .image-2,
      .image-3,
      .image-4,
      .image-5 {
        margin-left: -22px;
      }
    }
    .bgCircle {
      position: absolute;
      top: -7%;
      left: -10%;
      z-index: -1;
    }
  }
  .right-items {
    position: relative;
    img {
      padding-left: 2rem;
    }
    .bgCircle {
      position: absolute;
      bottom: -7%;
      right: 0;
      z-index: -1;
    }
  }
  color: var(--purple-primary);


`

export default MessagingSection
