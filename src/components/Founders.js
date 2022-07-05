import styled from 'styled-components';
import jhon from '../img/jhon.png';
import laura from '../img/laura.png';
import santiago from '../img/santiago.png';
import sebas from '../img/sebas.png';
import { InnerLayout } from '../styles/Layouts';
import { Dimensions } from 'react-native';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.height * 0.2); 
const imageWidth = Math.round(dimensions.width * 0.1);

function Founders() {
    return (
        
        <InnerLayout>
            <h1 className="small-heading">Equipo fundador</h1>
            <br></br>
        <FoundersStyled>
        
            <div className="left-items">
                
                <div className="left-text-container">
                    <img style={{ height: imageHeight, width: imageWidth }} src={santiago} alt="" />
                </div>
                <br></br>
                <p className='title-para'>Santiago Albisser</p>
                
                
                <br></br>
                <p className="m-para">
                <h1>Desarrollador web / app</h1>
                <p class="text-justify">Experiencia trabajado en Bancolombia uno de los bancos más reconocidos de Colombia en el área de arquitectura de innovación como desarrollador y en Imagine apps como desarrollador Flutter.También tiene experiencia trabajando en Suiza en su intercambio con la universidad.</p>
                </p>
            </div>
            <div className="left-items">
                <div className="left-text-container">
                    <img style={{ height: imageHeight, width: imageWidth }} src={laura} alt="" />
                    <br></br>
                    <p>Laura Bermúdez</p>
                    <br></br>
                </div>
                <p className="m-para">
                <h1>Experta en inversiones </h1>
                <p class="text-justify">Magister en Finanzas Cuantitativas de la Universidad de Alcalá. Experiencia en el sector financiero. Ha trabajado en Protección uno de los fondos de pensiones más importantes de Colombia y en BTG Pactual que es uno de los bancos de inversión más reconocidos de LATAM.</p>
                </p>
            </div>
            </FoundersStyled><FoundersStyled>
            <div className="left-items">
                <div className="left-text-container">
                    <img style={{ height: imageHeight, width: imageWidth }} src={jhon} alt="" />
                    <br></br>
                    <p>Jhon Zuluaga</p>
                    <br></br>
                </div>
                <p className="m-para">
                <h1>Desarrollador blockchain</h1>
                <p class="text-justify">Amplia experiencia en la creación de wallet móviles y tokenización de instrumentos para las finanzas descentralizadas(DEFI). Ha trabajado para grandes compañías locales e internacionales como: Suramericana, Bancolombia, Michael Page y Kumuly.</p>
                </p>
            </div>
            <div className="left-items">
                <div className="left-text-container">
                    <img style={{ height: imageHeight, width: imageWidth }} src={sebas} alt="" /> 
                    <br></br>               
                    <p>Sebastián Ortiz</p>
                   
                    
                </div>
                <p className="m-para">
                <h1>Mercadeo y ventas </h1>
                
                <p class="text-justify">Experiencia como consultor financiero en Protección, el segundo fondo de pensiones más grande de Colombia, administrando una cartera de clientes por un valor de fondo 35 millones de dólares.</p>
                </p>
            </div>
        </FoundersStyled>
        </InnerLayout>
    )
}

const FoundersStyled = styled.header`
@media screen and (max-width: 1347px) {
    padding: 5rem 14rem;
  }
  @media screen and (max-width: 1186px) {
    padding: 5rem 8rem;
  }
  @media screen and (max-width: 990px) {
    padding: 5rem 4rem;
  }
  @media screen and (max-width: 760px) {
    padding: 5rem 4rem;
  }
    .left-items{
        position: relative;
        padding-right: 2rem;
        .m-para{
            font-size: 1rem;
            margin-left: 5px;
            width: auto;
            text-align: left;
        }
    }
    img{
        display:flex;  
        width: 20%;
        height: 20%;

    }
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: white;
    border-radius: 50px;
    border: 1px solid var(--border-colour);
    height: auto;
    width: auto;
    padding: 2rem;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
`;

export default Founders;
