import React, { Component } from 'react';
import { Card ,Button,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CachedIcon from '@material-ui/icons/Cached';
import BrushIcon from '@material-ui/icons/Brush';


class AjouterMatiere extends Component {

    render(){

        return(

<Card className="text-center">
  <Card.Header><RssFeedIcon color="green"/> Formulaire ajout matiere </Card.Header>
  <Card.Body>
  <Form class="container" >

<div class=" form-group " >
<label for="nom" >nom matiere</label>
<input
 name="nom"
 placeholder="matiere"
 value=""
  type="text" class="form-control col-sm-10" id="nom"/>
</div>
</Form>


    <Button variant="primary"><CachedIcon/>enregistrement</Button>
  </Card.Body>
  <Card.Footer className="text-muted"><ErrorOutlineIcon/>Tous les champs sont obligatoires</Card.Footer>
</Card>

        )
    }


    }
    export default AjouterMatiere;
