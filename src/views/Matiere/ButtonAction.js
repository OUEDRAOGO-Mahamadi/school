import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import DehazeIcon from '@material-ui/icons/Dehaze';
import DeleteIcon from '@material-ui/icons/Delete';

class Example extends Component {


  render(){

  return (



<div>

<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic"><DehazeIcon/>
    Actions
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="../Footer/Footer.js" ><BorderColorIcon/>Modifier</Dropdown.Item>
    <Dropdown.Item href="#/action-2" ><DeleteIcon/>Supprimer</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


</div>


  )
}

}

export default Example;
