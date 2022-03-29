import './App.css';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Habilidades from './components/Habilidades';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     

      <Header />
      <About />
      <Habilidades />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
