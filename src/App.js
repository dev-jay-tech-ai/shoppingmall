import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useState } from 'react'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Main from './routes/Main'
import Detail from './routes/Detail'

function App() {
  let navigate = useNavigate()

  return (
    <div className='App'>
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate('/') } >Home</Nav.Link>
          <Nav.Link onClick={() => navigate('/detail') }>Detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>


    </div>
  );
}

export default App;
