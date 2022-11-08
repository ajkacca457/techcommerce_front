import './App.css';
import Container from './components/Container';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-[100vh] flex flex-col justify-between">
        <Container/>
        <Footer/>
    </div>
  );
}

export default App;
