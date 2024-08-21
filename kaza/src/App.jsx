import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import House from './pages/House/House';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error';
import BaseLayout from './components/Layout/BaseLayout';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/House/:id" element={<House />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
