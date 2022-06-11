
import './App.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
function App() {
  return (
<>
    <Header/>
    <Container>
      <main>
        Welcome
      </main>
      <HomeScreen/>
    </Container>
    <Footer/>
</>
  );
}

export default App;
