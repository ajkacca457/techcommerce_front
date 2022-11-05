import './App.css';
import AppRoutes from './routes/Routes';
import {ProductProvider} from "./context/ProductContext";

function App() {
  return (
    <div className="App">
        <AppRoutes/>
    </div>
  );
}

export default App;
