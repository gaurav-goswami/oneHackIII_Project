import './css/App.css'
import './css/text.css'
import Home from './pages/Home.jsx'
import LogIn from './pages/LogIn.jsx'
import SignUp from './pages/SignUp.jsx'
import {Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/log-in" element={<LogIn />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App
