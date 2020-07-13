import React, { Component } from 'react';
import { Table} from 'reactstrap';
import Footer from './Footer';
import Header from './Header';
import Example from './ButtonAction';

class ListeMatiere extends Component {

    render(){

        return(
         <div class="flex-container">
         <Header/>
         <Table striped bordered hover >
            <thead>
              <tr>
                <th>#</th>
                <th>Nom de la matiere</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td colSpan="2"><Example/></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td colSpan="2"><Example/></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Thornton</td>
                <td colSpan="2"><Example/></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Thornton</td>
                <td colSpan="2"><Example/></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Thornton</td>
                <td colSpan="2"><Example/></td>
              </tr>
            </tbody>
          </Table>

         <Footer/>
         </div>

        )
    }


    }
    export default ListeMatiere;
