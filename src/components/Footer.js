import styled from 'styled-components';
import logo from '../img/berologoColorSinCirculo.png';
import { InnerLayout } from '../styles/Layouts';

function Footer() {
    return (
        <FooterStyled>
            <InnerLayout>
                <div className="footer-con">
                    <div className="logo-con">
                       <div className="logo-items">
                        <img src={logo} alt="" />
                            <p>
                                Copyright @2021 Bero. <br />
                                Todos los derechos reservados.
                            </p>
                       </div>
                    </div>
                    <ul className="botton-nav">
                        <div className="links1">
                            <li>
                                <a href='https://www.linkedin.com/company/bero-app/' target='_blank' rel="noreferrer">Linkedln</a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/bero_app/?utm_medium=copy_link'
                        target='_blank' rel="noreferrer">Instagram</a>
                            </li>
                         
                        </div>
                        
                        <div className="links3">
                            <li>
                                <a href="#">Términos y condiciones</a>
                            </li>
                            <li>
                                <a href="#">Política de Tratamiento</a>
                            </li>
                            <li>
                                <a href="#">Contáctanos</a>
                            </li>
                        </div>
                    </ul>
                </div>
            </InnerLayout>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    padding: 0 18rem;
    background-color: #DCE2F0;
    @media screen and (max-width: 1347px){
        padding: 5rem 14rem;
    }
    @media screen and (max-width: 1186px){
        padding: 5rem 8rem;
    }
    @media screen and (max-width: 990px){
        padding: 5rem 4rem;
    }
    .footer-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .logo-con{
        display: flex;
        align-items: center;
        img{
            width: 90px;
        }
    }

    .botton-nav{
        display: flex;
        justify-content: space-between;
        li{
            padding: 2rem 0;
            color: #16194F;
        }
    }
`;

export default Footer
