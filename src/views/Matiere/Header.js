import React, { Component } from 'react';
import { Navbar,Form,Nav,FormControl,Button } from 'react-bootstrap';
import ButtonIncrementer from './ButtonIncremmenter';


class Header extends Component {

  render(){

      return(
       <div>
       <Navbar bg="light" variant="light">
         <Navbar.Brand href="#home">Afficher</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link href="#home"><ButtonIncrementer/></Nav.Link>
      <Nav.Link href="#features">elements</Nav.Link>

    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
       </div>

      )
  }


  }
  export default Header;
