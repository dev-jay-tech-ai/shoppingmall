import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import MainPage from './routes/Main'
import DetailPage from './routes/Detail'
import PageNotFound from './routes/PageNotFound'
import AboutPage from './routes/About'
import MemberPage from './routes/Member'
import CartPage from './routes/Cart'
import data from './data'
import Context from './Context'

function App() {
  const navigate = useNavigate()
  const [shoes] = useState(data)

  useEffect(() => localStorage.getItem('viewed') && localStorage.setItem('viewed', JSON.stringify( [] )),[])

  return (
    <div className='App'>
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate('/') } >Home</Nav.Link>
          <Nav.Link onClick={() => navigate('/cart') }>Cart</Nav.Link>
          <Nav.Link onClick={() => navigate('/about') }>About</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <Context.Provider value={{ shoes }}>
            <MainPage />
          </Context.Provider>  
        } />
        <Route path='/detail/:id' element={
          <Context.Provider value={{ shoes }}>
            <DetailPage />
          </Context.Provider>
        } />
        <Route path='/about' element={<AboutPage />}>
          <Route path='member' element={<MemberPage />} /> 
          <Route path='location' element={<AboutPage />} /> 
        </Route>
        <Route path='cart' element={<CartPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>


    </div>
  );
}

export default App;
