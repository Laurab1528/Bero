import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'

function MessagingSection () {
  return (
    <InnerLayout>
      <MessageStyle>
        <div className='left-items'>
          <h2 className = 'title-message'>3 Simples pasos</h2>
        <div className='title-para'>Escogencia del inmueble</div>
          <p className='m-para'>
            Bero se encarga de analizar exhaustivamente los diferentes inmuebles
            para escoger los que mayor probabilidad de éxito tienen.
          </p>
        </div>
        <div className='left-items'>
          <div className='title-para'>Recolección del dinero</div>
          <p className='m-para'>
            Bero se encarga de recoger el dinero de los inversores para poder
            pagar la totalidad del inmueble.
          </p>
        </div>
        <div className='left-items'>
          <div className='title-para'>Distribución de utilidades</div>
          <p className='m-para'>
            Bero se encarga de distribuir el arrendamiento mensual según el
            porcentaje de participación. Bero en el momento de la venta del
            inmueble (2 o 3 años según propiedad) distribuirá el capital
            aportado más la valorización de la propiedad.
          </p>
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
