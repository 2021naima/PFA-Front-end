/* eslint-disable */
import { History } from "react-router-dom"
import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import ReactDOM from 'react-dom';
import axios from 'axios';
import authHeader from '../services/auth-header.js';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
} from '@coreui/react'

class ListeCmds extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id:'',
      commandes: []
    }
  
   
}
 
  componentDidMount() {
    axios.get('http://localhost:8080/api/station/commande/commands',{ headers: authHeader() }).then(res => {

      this.setState({ commandes: res.data });
    })

  }
 
 
  delete(id){
  
    axios.delete('http://localhost:8080/api/station/commande/delete'+'/'+id, { headers: authHeader() }).then( res => {
      this.setState({commandes: this.state.commandes.filter(cmd => cmd.id !== id)});
  });
    console.log("commande deleted!!")
}

render() {
    return (
      <CCard className="mb-4" color="white">
        <div className="">
        <h5><strong>La liste des commandes fournisseur</strong></h5>
        </div>
        <br/>
        <table className="table table-striped">
          <thead>
            <tr >
            <th className="">Id de la commande</th>
              <th className="">date de la commande </th>
              <th className="">nom du fournisseur</th>
              <th className=""> produit commandé</th>
              <th className=""> Quantité commandée en L</th>
              <th className="">Prix unitaire en DH </th>
              <th className="">Montant total en DH </th>
            </tr>
          </thead>
          <tbody>
            
            {this.state.commandes.map(cmd => <tr key={cmd.id}>
             <td key={cmd.id}>{cmd.id}</td>
              <td key={cmd.id}>{cmd.dateComande}</td>
              <td key={cmd.id}>{cmd.nomFournisseur}</td>
              <td key={cmd.id}>{cmd.nomProduit}</td>
              <td key={cmd.id}>{cmd.quantite}</td>
              <td key={cmd.id}>{cmd.prixU}</td>
              <td key={cmd.id}>{cmd.montantTotal}</td>
              <td>
                <Link
                to={`/updateCmd/${cmd.id}`}
                  className="btn btn-info"
                >
                  consulter
                </Link>
              </td>
              <td>
              <Link
                to={`/updateCmd/${cmd.id}`}
                  className="btn btn-success"
                 
                >
                  modifier
               </Link>
              </td>
              <td><button type="button" className="btn btn-danger" onClick={ () => this.delete(cmd.id)} >Supprimer</button></td>
            </tr>)}
          </tbody>
        </table >
        <div className="text-center">
        <Link to={`/AddCmd`} className="btn btn-primary">Ajouter une commande</Link> 
        </div>
        </CCard>

    

    );
  }

}


export default ListeCmds;
