import React, { Component } from 'react';
import { Card ,Button,InputGroup,DropdownButton,Dropdown } from 'react-bootstrap';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SchoolIcon from '@material-ui/icons/School';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CachedIcon from '@material-ui/icons/Cached';
import './AffecterMatiereClasse.css';




class AffecterMatiereClasse extends Component {

    render(){

        return(



<Card className="text-center">
  <Card.Header ><RssFeedIcon id ="vert"/> Formulaire affecter une matiere a une classe</Card.Header>
  <Card.Body>

  <InputGroup className="mb-3 " >
  <InputGroup.Prepend>
    <InputGroup.Text>matiere</InputGroup.Text>
  </InputGroup.Prepend>

  <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="selectionner"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton><Button disabled><EventNoteIcon/></Button>
  </InputGroup>

  <InputGroup className="mb-3">
  <InputGroup.Prepend>
    <InputGroup.Text>classe</InputGroup.Text>
  </InputGroup.Prepend>
  <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="selectionner"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton><Button disabled><AccountBalanceIcon/></Button>
  </InputGroup>



  <InputGroup className="mb-3">
  <InputGroup.Prepend>
    <InputGroup.Text>semestre</InputGroup.Text>
  </InputGroup.Prepend>
  <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="selectionner"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton><Button disabled><DehazeIcon/></Button>

  </InputGroup>




  <InputGroup className="mb-3">
  <InputGroup.Prepend>
    <InputGroup.Text>annee scolaire</InputGroup.Text>
  </InputGroup.Prepend>
  <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="selectionner"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton><Button disabled><SchoolIcon/></Button>

  </InputGroup>




    <Button variant="primary"><CachedIcon/>enregistrement</Button>
  </Card.Body>
  <Card.Footer className="text-muted"><ErrorOutlineIcon  id ="rouge"/>Tous les champs sont obligatoires</Card.Footer>
</Card>

        )
    }


    }
    export default AffecterMatiereClasse;
