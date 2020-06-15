import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card,CardBody, CardHeader,Label,CardFooter, CardGroup, Col, Container, Form,FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


class AjouterEmp extends Component {
  
render(){
    const matiere=[
       "Veuillez selectionner", "Anglais","Francais","Mathematiques","Science Physique","SVT","Histoire-Geo","EPS"
    ]
    const classe=[
        "Veuillez selectionner", "6ième","5ième","4ième","3ième","2nde","1ière","Tle"
    ]

    const heure=[
        "Veuillez selectionner", "7H","8H","9H","10H","11H","12H","14H","15H","16H","17H","18H"
    ]
    return(
     <div>
     <Card>
              <CardHeader>
                  <i className="cui-rss icons font-2xl d-block mt-4"><strong> Ajouter emploi du temps</strong></i>      
              </CardHeader>
              <CardBody>
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="classe"><strong>Classe</strong></Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="select" name="classe" id="disabledSelect"  autoComplete="name">
                        {
                            classe.map(
                                (mat,id)=>{
                                    return(
                                        <option value={id}>{mat}</option>
                                    )
                                }
                            )
                        }
                       
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-password"><strong>Section</strong></Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="select" name="section" id="disabledSelect"  autoComplete="name">
                        <option value="0">Veuillez selectionner</option>
                        <option value="1">A</option>
                        <option value="2">B</option>
                        <option value="3">C</option>
                        <option value="4">D</option>
                        <option value="5">E</option>
                        <option value="6">F</option>
                        <option value="7">G</option>     
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-password"><strong>Matière</strong></Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="select" name="matiere" id="disabledSelect"  autoComplete="name">
                    {
                            matiere.map(
                                (mat,id)=>{
                                    return(
                                        <option value={id}>{mat}</option>
                                    )
                                }
                            )
                        }
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-password"><strong>Jour</strong></Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="select" name="jour" id="disabledSelect"  autoComplete="name">
                        <option value="0">Veuillez selectionner</option>
                        <option value="1">Lundi</option>
                        <option value="2">Mardi</option>
                        <option value="3">Mercredi</option>
                        <option value="4">Jeudi</option>
                        <option value="5">Vendredi</option>
                        <option value="6">Samedi</option>
                        
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-password"><strong>Heure debut</strong></Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="select" name="heure-debut" id="disabledSelect"  autoComplete="name">
                    {
                            heure.map(
                                (mat,id)=>{
                                    return(
                                        <option value={id}>{mat}</option>
                                    )
                                }
                            )
                        }
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-password"><strong>Heure fin</strong></Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="select" name="heure-fin" id="disabledSelect"  autoComplete="name">
                    {
                            heure.map(
                                (mat,id)=>{
                                    return(
                                        <option value={id}>{mat}</option>
                                    )
                                }
                            )
                        }
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="hf-password"><strong>Année Scolaire</strong></Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="text" name="anne-scolaire" id="disabledSelect"  autoComplete="name">
                      </Input>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Sauvegarder</Button>

                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Annuler</Button>
              </CardFooter>
            </Card>
     </div>

    )
}


}
export default AjouterEmp;