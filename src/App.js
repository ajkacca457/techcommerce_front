import './App.css';
import Container from './components/Container';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App flex flex-col justify-between font-work min-h-screen">
        <Container/>
        <Footer/>
    </div>
  );
}

export default App;
