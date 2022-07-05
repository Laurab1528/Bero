
import styled from 'styled-components';
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { InnerLayout } from '../styles/Layouts';
import images from "../components/images";
import Carditem from "../components/Carditem";
function Card ()  {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
      <InnerLayout>
            <CardStyled>                
             <h1 className="small-heading" id="Listas">Proyectos <span>listados</span></h1>
             <br></br>
                <div style={{ padding: `0 ${chevronWidth}px` }}>
                    <ItemsCarousel
                        requestToChangeActive={setActiveItemIndex}
                        activeItemIndex={activeItemIndex}
                        numberOfCards={1}
                        gutter={20}
                        leftChevron={<button>{'<'}</button>}
                        rightChevron={<button>{'>'}</button>}
                        outsideChevron
                        chevronWidth={chevronWidth}
                        >
                        <div style={{ height: 400, background: '#EEE' }}>
                            
                            <Carditem images={images}/>
                            
                        </div>
                        
                        
                    </ItemsCarousel>
                </div>
                 
            </CardStyled>
      </InnerLayout> 
    );
  };

const CardStyled = styled.div`
    background-color: white;
    padding: 3rem 4rem;
    border-radius: 50px;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    .card-title{
        font-size: 2.5rem;
        color: #000;
        text-align: center;
        padding: 1.5rem 0;
        span{
            font-size: 1.5rem;
        }
    }

    .button-con{
        text-align: center;
        padding: 1.5rem 0;
        button{
            border: 2px solid #16194F;
            padding: .8rem 1.8rem;
            outline: none;
            cursor: pointer;
            background: transparent;
            border-radius: 20px;
            font-size: inherit;
            color: #16194F;
        }
    }

    .card-image-con{
        display: flex;
        justify-content: center;
        img{
            width: 70%;
        }
    }

    .plan-con{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.5rem 0;
        img{
            padding: 0 .3rem;
        }
    }

    .text-check{
        display: flex;
        align-items: center;
        padding: .4rem 0;
        img{
            padding-right: .3rem;
            width: 24px;
        }

        &:nth-child(6){
            color: #B7B7B7;
        }
        &:nth-child(7){
            color: #B7B7B7;
        }
        &:nth-child(8){
            color: #B7B7B7;
        }
    }
    
`;
export default Card;
