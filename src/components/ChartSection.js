import styled from 'styled-components';
import chart from '../img/chart.svg';
import { InnerLayout } from '../styles/Layouts';
import ChartStats from './ChartStats';

function ChartSection() {
    return (
        <ChartStyled >
            <InnerLayout>
                <div className="chart-con">
                    <div className="chart-left">
                        <div className="stats">
                            <div className="stats-money">
                                <ChartStats name={'Balance'} amount={'$1.2 M'} />
                                <ChartStats name={'Rentabilidad anual'} amount={'12%'} />
                            </div>
                            <img src={chart} alt="" />
                        </div>
                    </div>
                    <div className="chart-right">
                        <h2 className="secondary-heading">
                        Monitorea en cualquier momento tú inversión.
                        </h2>
                        <p>
                        Por medio de la tecnología tendrás el manejo de tu inversión y seguimiento de la rentabilidad adquirida en el transcurso del tiempo invertido.
                        </p>
                        {/* <AnimatedButton name={'Learn More'} /> */}
                    </div>
                </div>
            </InnerLayout>
        </ChartStyled >
    )
}

const ChartStyled = styled.section`
    .chart-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }
        .chart-left{
            width: 80%;
            @media screen and (max-width: 1347px){
                width: 100%;
            }
            .stats{
                img{
                    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                    border-radius: 62px;
                    width: 100%;
                }
                .stats-money{
                    display: flex;
                    padding-bottom: 1.3rem;
                    justify-content: space-between;
                }
            }
        }

        .chart-right{
            padding-left: 2rem;
            p{
                padding: 1.3rem 0;
            }
            h2{
                font-size: 2.5rem;
            }
        }
    }
`;

export default ChartSection
