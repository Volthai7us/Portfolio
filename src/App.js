import '../src/output.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './pages/Main'
// import AboutMe from './pages/AboutMe'
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
    return (
        <div>
            <Navbar />
            <Main />
            {/* <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/AboutMe" element={<AboutMe />} />
                </Routes>
            </Router> */}
            <Footer />
        </div>
    )
}

export default App
