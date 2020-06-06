import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Dropdown, DropdownItem, DropdownMenu, DropdownToggle,Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import Liste from "../../Donnes/Liste"
class ListProf extends Component {
  
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: new Array(12).fill(false),
        };
    }

    toggle(i) {
        const newArray = this.state.dropdownOpen.map((element, index) => {
          return (index === i ? !element : false);
        });
        this.setState({
          dropdownOpen: newArray,
        });
      }

    render(){
    
        return(
         <div>
         <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Combined All Table
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                  <tr>
                    <th>Username</th>
                    <th>Date registered</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  {Liste.map((route, idx) => {
                    return(
                      
                    <tr>
                    <td>{route.username}</td>
                    <td>{route.date}</td>
                    <td>{route.role}</td>
                    <td>
                    <Dropdown direction="right" isOpen={this.state.dropdownOpen[idx]} toggle={() => {
                  this.toggle(idx);
                   }}>
                    <DropdownToggle caret  >
                    Options
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Options</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem color="red" disabled>Details</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Modifier</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Supprimer</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                    </td>
                  </tr>
                  )
                  })}
                  
                
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
         </div>
    
        )
    }
    
    
    }
    export default ListProf;