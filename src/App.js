import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Test from './components/NavBar/test';
import PreBody from './components/PreBody';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeCarousel from './components/Home/HomeCarousel/HomeCarousel.js';
import HomeCardsMap from './components/Home/HomeCards/HomeCardsMap';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Test />
      <HomeCarousel />
      <HomeCardsMap />
      <PreBody />
      <Footer />
    </div>
  );
}

export default App;
