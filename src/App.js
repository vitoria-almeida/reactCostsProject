import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Company from './components/pages/Company'
import Projects from './components/pages/Projects'

import Container from './components/layouts/Container'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Container customClass="min-height">
          <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route path="/projects" element={<Projects/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/company" element={<Company/>}></Route>
              <Route path="/newproject" element={<NewProject/>}></Route>
            </Routes>
          </Container>     

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
