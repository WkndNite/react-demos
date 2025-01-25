import Header from './components/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Operation from './components/Operation';
import Details from './components/Details';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/operation" element={<Operation />} />
        <Route path="/" element={<Navigate replace to="home" />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/operation/:id" element={<Operation />} />

      </Routes>
    </>
  );
}

export default App;
