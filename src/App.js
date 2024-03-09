import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { lazy, Suspense, useEffect, useState } from 'react'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { useQuery } from "react-query"
import MainPage from './routes/Main'
import data from './data'
import Context from './Context'
import axios from 'axios'

const PageNotFound = lazy(() => import('./routes/PageNotFound')) 
const DetailPage = lazy(() => import('./routes/Detail'))
const AboutPage = lazy(() => import('./routes/About'))
const MemberPage = lazy(() => import('./routes/Member'))
const CartPage = lazy(() => import('./routes/Cart'))

function App() {
  const navigate = useNavigate()
  const [shoes] = useState(data)

  const result = useQuery('getName',() => {
    return axios.get('https://codingapple1.github.io/userdata.json')
      .then((result) => result.data )
      ,{ staleTime : 2000 }
  })

  useEffect(() => {
    !localStorage.getItem('viewed') && localStorage.setItem('viewed', JSON.stringify( [] ))
    return
  },[])

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
        <Nav className='ms-auto'>
          { result.isLoading && 'Loading' }
          { result.error && 'Error' }
          { result.data && result.data.name }
        </Nav>
        </Container>
      </Navbar>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>

    </div>
  );
}

export default App;
