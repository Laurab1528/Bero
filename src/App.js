import styled from 'styled-components'
import ChartSection from './components/ChartSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import Form from './components/Form'
import Founders from './components/Founders'
import Header from './components/Header'
import InfoBero from './components/InfoBero'
import MessagingSection from './components/MessagingSection'
import { OuterLayout } from './styles/Layouts'
import { Helmet } from "react-helmet";
import Wapp from "./components/Wapp"


import Card from './components/Card'


function App () {

  return (
    <div className='App'>
      <Header />
      <Wapp/>
      <Helmet    meta
                name="description"
                content="crowdfunding inmobiliario"
            />
      <OuterLayout>
        <MainStyled>
          <InfoBero />               
          <MessagingSection /> 
          <Card />                    
          <ChartSection />          
          <Form />          
          <Founders />
          <FAQSection />
        </MainStyled>
      </OuterLayout>
     
      <Footer />
    </div>
  )
}

const MainStyled = styled.main``

export default App
