import Header from './components/Header';
import { OuterLayout } from './styles/Layouts';
import styled from 'styled-components';
import ChartSection from "./components/ChartSection";
import MessagingSection from "./components/MessagingSection";
import Footer from "./components/Footer";
import FAQSection from './components/FAQSection';
import Form from './components/Form';
import InfoBero from './components/InfoBero';
import Founders from './components/Founders';


function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <InfoBero/>
          <ChartSection />
          <MessagingSection />
          <Form />
          <Founders/>
          <FAQSection />
        </MainStyled>
      </OuterLayout>
      <Footer />
    </div>
  );
}

const MainStyled = styled.main`


`;

export default App;
