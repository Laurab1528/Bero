import styled from 'styled-components';
import message1 from '../img/message_blue.svg';
import message2 from '../img/message_pink.svg';
import phone from '../img/phone.png';
import Registrar from '../components/Form'
import ring1 from '../img/ring_orange.svg';
import Primarybutton from '../components/PrimaryButton';
import { BrowserRouter as Router} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';




function HeaderContent() {
   

    
    return (
        <HeaderContentStyled>
            
            <div className="left-content">
                <div className="left-text-container">
                    <h1>Invertir en bienes raices desde bajos montos</h1>
                    <p className="white">
                        Obtén RENTABILIDAD periódica invirtiendo en activos inmobiliarios. Hacemos las inversiones en propiedad raíz ACCESIBLES y SIN COMPLICACIONES
                    </p>
                    <Router>
                        <div>
                            <a href="https://wa.link/5sgfqp" target="_blank" rel="noreferrer">
                                { <Primarybutton name={'Contáctanos'}  />}
                            </a>
                        </div>
                        <div>
                            <br></br>
                            <Link to="#Registrar" smooth>
                                { <Primarybutton name={'Regístrate'}  />} <br></br><br></br>
                            </Link>
                        </div>



                    </Router>     
                    
                                      
                        
                  
                  

                    
                </div>
            </div>
            <div className="right-content">
                <img src={phone} alt="" className="phone" />
                <img src={ring1} alt="" className="ring1" />
                <img src={message1} alt="" className="message1" />
                <img src={message2} alt="" className="message2" />
            </div>
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 3rem;
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
    .left-content{
        display: flex;
        align-items: center;
        padding-right: 3rem;
        .white{
            color:white;
        }
        h1{
            font-size: 3rem;
            font-weight: 600;
            @media screen and (max-width: 700px){
                font-size: 3rem;
            }
            @media screen and (max-width: 867px){
                font-size: 2rem;
            }
        }

        .white{
            padding: 1.4rem 0;
            line-height: 1.8rem;
        }
    }

    .right-content{
        position: relative;
        display: flex;
        justify-content: center;
        .phone{
            width: 50%;
        }
        .ring1{
            position: absolute;
            bottom: 10%;
            right: 0;
            left: auto;
            animation: move2 20s infinite;
            transition: all .4s ease-in-out;
        }
        .message1{
            position: absolute;
            top: 0;
            right: 0;
            left: auto;
            animation: move 5s infinite;
            transition: all .4s ease-in-out;
        }
        .message2{
            position: absolute;
            bottom: 15%;
            left: 0;
            transition: all .4s ease-in-out;
            animation: move 8s infinite;
            animation-delay: .5s;
            transition: all .4s ease-in-out;
        }
    }

    //Header Animations
    .message1{
        @keyframes move{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
        @keyframes move2{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
    }
`;

export default HeaderContent;
