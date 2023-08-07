import './css/App.css'
import './css/text.css'
import Home from './pages/Home.jsx'
import Connect from './pages/Authenticate.jsx'
import Schedule from './pages/Schedule.jsx'
import {Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/schedule" element={<Schedule />} />
        <Route exact path="/connect" element={<Connect />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App
