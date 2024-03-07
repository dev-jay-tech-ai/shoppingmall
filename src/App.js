import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useState } from 'react'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import MainPage from './routes/Main'
import DetailPage from './routes/Detail'
import PageNotFound from './routes/PageNotFound'
import AboutPage from './routes/About'
import MemberPage from './routes/Member'
import data from './data'

function App() {
  let [shoes] = useState(data)
  let navigate = useNavigate()

  return (
    <div className='App'>
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate('/') } >Home</Nav.Link>
          <Nav.Link onClick={() => navigate('/about') }>About</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<MainPage shoes={shoes} />} />
        <Route path='/detail/:id' element={<DetailPage shoes={shoes} />} />
        <Route path='/about' element={<AboutPage />}>
          <Route path='member' element={<MemberPage />} /> 
          <Route path='location' element={<AboutPage />} /> 
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>


    </div>
  );
}

export default App;
