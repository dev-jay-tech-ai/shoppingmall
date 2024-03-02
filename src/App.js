import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

function App() {
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
    </div>
  );
}

export default App;
