import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useState } from 'react'
import data from './data'
import Card from './components/Card'

function App() {
  let [shoes] = useState(data)

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Cart</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <div className='container products'>
        <div className='row'>
        {shoes.map((shoe,idx) => {
          return (
            <Card key={idx} idx={idx+1} shoe={shoe} />
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default App;
