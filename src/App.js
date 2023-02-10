import './App.css';
import Counter from './Counter/Counter';
import NameGenerator from './NameGenerator/NameGenerator';
import { NavLink, Routes, Route } from 'react-router-dom';

const ROOT_PATH = "/";
const NAMES_PATH = "/names";

function App() {
  return (
    <>
      <nav>
        <NavLink to={ROOT_PATH}>Compteur</NavLink>
        <NavLink to={NAMES_PATH}>Générateur de noms</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path={ROOT_PATH} element={<Counter />}></Route>
          <Route path={NAMES_PATH} element={<NameGenerator />}></Route>
        </Routes>
      </main>
    </>);
}

export default App;