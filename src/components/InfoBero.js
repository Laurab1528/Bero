import React from 'react'
import styled from 'styled-components';
import YouTube from 'react-youtube'

function InfoBero() {
    return (
        <InfoBeroStyled>
            <div className='right'>
                <YouTube videoId='4-Tc2eEgz3M' />
            </div>
        </InfoBeroStyled>
    )
}

const InfoBeroStyled = styled.header`
    background-color: white;
    border-radius: 50px;
    border: 1px solid var(--border-colour);
    height: 30rem;
    padding: 2rem;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    h4{
        font-size: 3rem;
        color: var(--purple-primary);
    }
    p{
        color: black;
    }
`;

export default InfoBero;
