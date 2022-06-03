import styled from 'styled-components';
import lines from '../img/lines.svg';
import questions from '../questions';
import { InnerLayout } from '../styles/Layouts';
import Question from './Question';

function FAQSection() {
    return (
        <FaqStyled>
            <InnerLayout>
                <h3 className="small-heading">Preguntas <span>más comunes</span></h3>
                <p className="c-para">
                Estas son unas de las preguntas más frecuentes que hemos visto al rededor del tema, que se nos realizan.
                </p>
                <div className="lines">
                    <img src={lines} alt="" />
                </div>

                <div className="questions-con">
                    {
                        questions.map((q)=>{
                            return <Question key={q.id} {...q} />
                        })
                    }
                </div>
                
            </InnerLayout>
        </FaqStyled>
    )
}

const FaqStyled = styled.section`
    .c-para{
        width: 60%;
        margin: 0 auto;
    }
    .questions-con{
        padding-top: 4rem;
    }
    .lines{
        position: absolute;
        left: 0;
        top: 300%;
        width: 100%;
        z-index: -1;
        img{
            width: 100%;
        }
    }

`;

export default FAQSection;
