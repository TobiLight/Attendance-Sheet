import './styles/index.css';
import NavBar from "./components/Shared/Navigation/Nav"
import Home from "./components/Home"

function App(): JSX.Element {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
