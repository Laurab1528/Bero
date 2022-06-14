import React from 'react'
import styled from 'styled-components';
import santiago from '../img/santiago.png';
import laura from '../img/laura.png';
import jhon from '../img/jhon.png';
import sebas from '../img/sebas.png';
import { InnerLayout } from '../styles/Layouts';

function Founders() {
    return (
        <InnerLayout>
        <FoundersStyled>
            <div className="left-items">
                <div className="left-text-container">
                    <img src={santiago} alt="" />
                </div>
                <p className="m-para">
                Soy un ingeniero de sistemas de la universidad eafit. Apasionado en el tema de blockchain. Desarrollador  de aplicaciones móviles con Flutter. He trabajado en bancolombia en el ares de arquitectura de innovación como desarrollador, en imagine apps como desarrollador Flutter y hice un semestre de intercambio en la universidad FHNW de suiza.
                </p>
            </div>
            <div className="left-items">
                <div className="left-text-container">
                    <img src={laura} alt="" />
                </div>
                <p className="m-para">
                Magister en Finanzas Cuantitativas de la Universidad de Alcalá. Experiencia en el sector financiero mayormente en temas de inversiones, trabajando en Protección uno de los fondos de pensiones más importantes de Colombia y en BTG Pactual uno de los bancos de inversión más reconocidos de LATAM.
                </p>
            </div>
            </FoundersStyled><FoundersStyled>
            <div className="left-items">
                <div className="left-text-container">
                    <img src={jhon} alt="" />
                </div>
                <p className="m-para">
                Desarrollador Blockchain con una amplia experiencia en la creación de wallet móviles y tokenización de instrumentos para las finanzas descentralizadas. He trabajado para grandes compañías como Suramericana, Bancolombia, Michal Page y actualmente en Kumuly con la visión de descentralizar la economía por medio de la tecnología blockchain con bitcoin.
                </p>
            </div>
            <div className="left-items">
                <div className="left-text-container">
                    <img src={sebas} alt="" />
                </div>
                <p className="m-para">
                Ingeniero Administrador con alta experiencia en inversiones, ventas y mercadeo. Fue consultor financiero en Protección el segundo fondo de pensiones más grande de Colombia administrando una cartera de clientes con un valor de fondo 35 millones de dólares. Certificado ante el autorregulador del mercado de valores (AMV).
                </p>
            </div>
        </FoundersStyled>
        </InnerLayout>
    )
}

const FoundersStyled = styled.header`
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
