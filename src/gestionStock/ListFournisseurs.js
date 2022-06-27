/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
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
class ListeFournisseurs extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    id:'',
    fournisseurs: []
  }
}
  componentDidMount() {
    axios.get('http://localhost:8080/api/station/fournisseur/fournisseurs',{ headers: authHeader() }).then(res => {

      this.setState({ fournisseurs: res.data });
    })
  }

  deleteFournisseur(id){

  axios.delete('http://localhost:8080/api/station/fournisseur/delete'+'/'+id,{ headers: authHeader() }).then( res => {
    this.setState({fournisseurs: this.state.fournisseurs.filter(fournisseur => fournisseur.id !== id)});
});
  console.log("fournisseur dellete success")
}

render() {
    return (
      <CCard className="mb-4" color="white">
        <CCardHeader color="white">
        <strong>La liste des Fournisseurs</strong> <small></small>
      </CCardHeader>
        <table class="table table-striped">
          <thead>
            <tr >
            <th class="">Id</th>
            <th class="">Raison social </th>
            <th class="">la forme juridique </th>
              <th class="">Téléphone</th>
              <th class="">Numéro du fax </th>
              <th class="">Adresse </th>
              <th class="">Adresse email</th>
             
            </tr>
          </thead>
          <tbody>
            {this.state.fournisseurs.map(fournisseur => <tr key={fournisseur.id}>
              {this.state.id=fournisseur.id}
              <td key={fournisseur.id}>{fournisseur.raisonSocial}</td>
              <td key={fournisseur.id}>{fournisseur.formeJuridique}</td>
              <td key={fournisseur.id}>{fournisseur.tel}</td>
              <td key={fournisseur.id}>{fournisseur.fax}</td>
              <td key={fournisseur.id}>{fournisseur.adresse}</td>
              <td key={fournisseur.id}>{fournisseur.email}</td>
              <th class=""> </th>
              <th class=""> </th>
              
              <td><Link
                  to={`/stock/updateFournisseur/${fournisseur.id}`}
                  className="btn btn-primary"
                 
                >
                  Consulter
               </Link></td>
              
              <td><Link
                to={`/stock/updateFournisseur/${fournisseur.id}`}
                  className="btn btn-secondary"
                 
                >
                  modifier
               </Link></td>
              <td><button type="button" class="btn btn-danger" onClick={ () => this.deleteFournisseur(fournisseur.id)}>Supprimer</button></td>
            </tr>)}
          </tbody>
        </table>
        <div className='text-center'>
       
          <Link
                to={`/stock/addfournisseur/`}
                  className="btn btn-primary"
                 
                >
                  Ajouter un fournisseur
               </Link>
           
          </div>
          </CCard>

    

    );
  }

}


export default ListeFournisseurs;
