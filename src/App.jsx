import './index.css'
import { Home } from './pages/Home'
import { CreateProject } from './pages/CreateProject';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<CreateProject />} />

      </Routes>
    </Router>
  );
}
