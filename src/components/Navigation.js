import styled from 'styled-components';
import logo from '../img/beroLogo.png';

function Navigation() {
    return (
        <NavigationStyled>
            <div className="logo-navigatior">
                <img src={logo} alt="" />
            </div>
            <ul>
                <li>
                    <a href="">Inicio</a>
                </li>
                {/* <li>
                    <a href="">Features</a>
                </li>
                <li>
                    <a href="">Pricing</a>
                </li> */}
            </ul>
            
        </NavigationStyled>
    )
}


const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;

    ul{
        display: flex;
        justify-content: space-between;
        width: 40%;
    }
    .logo-navigatior{
        display:flex;  
        width: 100px;
        height: 50px;
    }
`;
export default Navigation