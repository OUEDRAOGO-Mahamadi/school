import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button,DropdownMenu,Collapse,DropdownItem, Card,DropdownToggle,CardHeader,UncontrolledDropdown,Badge,ListGroup,ListGroupItem,TabPane,TabContent, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import DetailEmp from './DetailsEmp'
class EmploiList extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          accordion: [false,false, false, false],
          activeTab: 1
        };
      }
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
        this.toggleAccordion = this.toggleAccordion.bind(this);
      }
    
      toggleAccordion(tab) {

        const prevState = this.state.accordion;
        const state = prevState.map((x, index) => tab === index ? !x : false);
    
        this.setState({
          accordion: state,
        });
      }
    render(){
      const liste=[
          ["Lundi","Histoire 7H-8H","Mathemetique 8H-9H","physique 10H-11","SVT 15H-18H"],
          ["Mardi","Mathemetique 8H-9H","physique 10H-11","SVT 15H-18H"],
          ["Mercredi","Mathemetique 8H-9H","physique 10H-11","SVT 15H-18H"],
          ["Jeudi","Mathemetique 8H-9H","physique 10H-11","SVT 15H-18H"],
          ["Vendredi","Mathemetique 8H-9H","physique 10H-11","SVT 15H-18H"],
          ["Samedi","Mathemetique 8H-9H","physique 10H-11","SVT 15H-18H"],          
      ]
        return(
         <div>
         <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>List Group</strong> <small>with TabPanes</small>
                <div className="card-header-actions">
                  <Badge>NEW</Badge>
                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="4" md="4">
                    <ListGroup id="list-tab" role="tablist">
                      <ListGroupItem onClick={() => this.toggle(0)} action active={this.state.activeTab === 0} >6ième</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(1)} action active={this.state.activeTab === 1} >5ième</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(2)} action active={this.state.activeTab === 2} >4ième</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(3)} action active={this.state.activeTab === 3} >3ième</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(4)} action active={this.state.activeTab === 4} >2nde</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(5)} action active={this.state.activeTab === 5} >1ière</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(6)} action active={this.state.activeTab === 6} >Tle</ListGroupItem>

                    </ListGroup>
                  </Col>
                  <Col xs="8" md="8">
                    <TabContent activeTab={this.state.activeTab}>
                  <UncontrolledDropdown size="lg">
                    <DropdownToggle caret color="info">
                     Section
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem >Modifier</DropdownItem>
                      <DropdownItem  >Supprimer</DropdownItem>                  
                    </DropdownMenu>
                   </UncontrolledDropdown>

                     { 
                        [1,2,3,4,5,6,7].map((num,id)=>{
                       return(<TabPane tabId={id} >
                         {/* affiche ca :liste simple */}
                         {/* <DetailEmp tableau={liste}/> */}

                         {
                           ["A","B","C","D"].map((num,id)=>{
                           return(
                            <div >
                                      <Card className="mb-0">
                                        <CardHeader id="headingOne">
                                          <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(id)} aria-expanded={this.state.accordion[id]} aria-controls="collapseOne">
                                            <h5 className="m-0 p-0">Section #{num}</h5>
                                          </Button>
                                        </CardHeader>
                                        <Collapse isOpen={this.state.accordion[id]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                                          <CardBody>
                                          <DetailEmp tableau={liste}/>
                                          </CardBody>
                                        </Collapse>
                                      </Card>
                                      
                                      </div>
                                 )
                           }
                           )
                          }            
                       </TabPane>  
                        )
                        }
                        )
                    }
                     
                </TabContent>
                  </Col>
                </Row>
              </CardBody>
            </Card>
         </div>
    
        )
    }
    
    
    }
    export default EmploiList;