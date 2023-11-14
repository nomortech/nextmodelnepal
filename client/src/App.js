import './App.css';
import Home from './pages/Home';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />

            </Routes>
        </div>
    );
}

export default App;
