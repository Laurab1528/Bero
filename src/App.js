import Header from './components/Header';
import { OuterLayout } from './styles/Layouts';
import styled from 'styled-components';
import CardSection from "./components/CardSection";
import ChartSection from "./components/ChartSection";
import MessagingSection from "./components/MessagingSection";
import Footer from "./components/Footer";
import PaymentSection from './components/PaymentSection';
import FAQSection from './components/FAQSection';


function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <CardSection />
          <ChartSection />
          <MessagingSection />
          <PaymentSection />
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
