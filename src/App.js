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

function App () {

  return (
    <div className='App'>
      <Header />
      <OuterLayout>
        <MainStyled>
          <InfoBero />
          <ChartSection />
          <MessagingSection />
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
