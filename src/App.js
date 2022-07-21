import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Test from './components/NavBar/test';
import PreBody from './components/PreBody';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Test />
      <PreBody />
      <Footer />
    </div>
  );
}

export default App;
