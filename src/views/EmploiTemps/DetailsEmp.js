import React from 'react'
import { DropdownItem, DropdownMenu,UncontrolledDropdown,DropdownToggle,Badge,Dropdown,ListGroup,ListGroupItem,TabPane,TabContent, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

const DetailEmp=({tableau})=>{
    
 function affiche(donnee) {

        return( 
            <UncontrolledDropdown size="sm">
                  <DropdownToggle caret >
                    {donnee}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem ><i className="cui-note icons font-1xl  "></i>Modifier</DropdownItem>
                    <DropdownItem color="red" ><i className="cui-trash icons font-1xl "></i>Supprimer</DropdownItem>                  
                  </DropdownMenu>
                </UncontrolledDropdown>
        )
    
} 
  
 return( 
 <div className="Product">
     {
      tableau.map(  (ligne,id) =>{
          return(
             <div>
             <Row><strong>{ligne[0]}</strong></Row>    
            <Row>

            {   ligne.map( (option,id2)=>{
               return (<Col md="6" sm="12">
                   {affiche(option)}
                </Col>
                )          
            }
            )
            }
            </Row>
           </div>
          ) 
    }
    )
    }
    </div>   
    )  
}

export default DetailEmp