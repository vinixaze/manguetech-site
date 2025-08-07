import Footer from './components/Footer';
import Home from './components/Home/index.js';
import Navbar from './components/Navbar/index.js';
import Valores from './components/Sobre/index.js';
import DataDriven from './components/DataDriven/index.js';
import Coparticipacao from './components/Coparticipacao/index.js';
import Plataforma from './components/Plataforma/index.js';
function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="sobre">
        <Valores />
      </div>
      <div id="data-driven">
        <DataDriven />
      </div>
      <div id='coparticipacao'>
        <Coparticipacao />
      </div>
      <div id='plataforma'>
        <Plataforma />
      </div>
      <Footer />
    </>
  );
}
export default App;
