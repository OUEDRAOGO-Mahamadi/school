

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class AjouterEleve extends Component {
  
    render(){
    
        return(
         

            <form>
                <div>
                <h1>Informations de l'élève</h1>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-4">
                    <label for="inputNom">Nom</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> 
                                    <span>
                                        <i class="fa fa-user" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                            <input type="text" class="form-control" id="inputEmail4"/>
                        </div>
                    </div>
                    <div class="form-group col-md-4">
                    <label for="inputPrenom">Prénom</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> 
                                    <span>
                                        <i class="fa fa-user" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                            <input type="text" class="form-control" id="inputPassword4"/>*
                        </div>
                    </div>
                    <div class="form-group col-md-4">
                    <label for="inputState">Sexe</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> 
                                    <span>
                                        <i class="fa fa-transgender" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                            <select id="inputState" class="form-control">
                            <option selected>Choisir...</option>
                            <option>...</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-4">
                    <label for="inputAddress">Date de naissance</label>
                        <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"> 
                                        <span>
                                            <i class="fa fa-calendar" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </div>
                        <input type="date" class="form-control" id="inputDateNaissance"/>
                        </div>
                    </div>

                    <div class="form-group col-md-4">
                    <label for="inputAddress">Address</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> 
                                    <span>
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                            <input type="text" class="form-control" id="inputAddress" placeholder="Rue 33 Villa 114"/>
                        </div>
                    </div>

                    <div class="form-group col-md-4">
                    <label for="inputPrenom">Email</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> 
                                    <span>
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                            <input type="email" class="form-control" id="inputPassword4" placeholder="email@example.com"/>
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputState">Classe</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> 
                                    <span>
                                        <i class="fa fa-home" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                            <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputAddress">Numéro matricule</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> 
                                    <span>
                                        <i class="fa fa-sort-numeric-asc" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                            <input type="text" class="form-control" id="inputAddress"/>
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Login</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> 
                                    <span>
                                        <i class="fa fa-user" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                            <input type="text" class="form-control" id="inputEmail4"/>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Mot de passe</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> 
                                    <span>
                                        <i class="fa fa-key" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                            <input type="password" class="form-control" id="inputPassword4"/>
                        </div>
                    </div>
                </div>


                <div>
                <h1>Informations du parent/tuteur</h1>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputNom">Nom du parent/tuteur</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> 
                                    <span>
                                        <i class="fa fa-user" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                            <input type="text" class="form-control" id="inputEmail4"/>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPrenom">Prénom du parent/tuteur</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> 
                                    <span>
                                        <i class="fa fa-user" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                            <input type="text" class="form-control" id="inputPassword4"/>
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-3">
                    <label for="inputState">Sexe</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> 
                                    <span>
                                        <i class="fa fa-transgender" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                            <select id="inputState" class="form-control">
                            <option selected>Choisir...</option>
                            <option>...</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-md-3">
                    <label for="inputPrenom">Email</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> 
                                    <span>
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                            <input type="email" class="form-control" id="inputPassword4" placeholder="email@example.com"/>
                        </div>    
                    </div>
                    <div class="form-group col-md-3">
                    <label for="inputPrenom">Numéro de téléphone</label>
                    <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> 
                                    <span>
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                            <input type="text" class="form-control" id="inputPassword4"/>
                        </div>
                    </div>
                    <div class="form-group col-md-3">
                    <label for="inputAddress">Address</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text"> 
                                    <span>
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                            <input type="text" class="form-control" id="inputAddress" placeholder="Rue 33 Villa 114"/>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck"/>
                        <label class="form-check-label" for="gridCheck">
                        Confirmer
                        </label>
                    </div>
                </div>

                <button type="submit" class="btn btn-success btn-lg">Ajouter l'élève</button>
            </form>
    
        )
    }
    
    
    }
    export default AjouterEleve;