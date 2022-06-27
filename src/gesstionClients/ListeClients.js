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
class ListClients extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    id:'',
    clients: []
  }
}
  componentDidMount() {
    axios.get('http://localhost:8080/api/station/client/AllClients',{ headers: authHeader() }).then(res => {

      this.setState({ clients: res.data });
    })
  }

  deleteFournisseur(id){

  axios.delete('http://localhost:8080/api/station/client'+'/'+id,{ headers: authHeader() }).then( res => {
    this.setState({clients: this.state.clients.filter(client => client.id !== id)});
});
  console.log("client delleted!!")
}

render() {
    return (
      <CCard className="mb-4" color="white">
        <CCardHeader color="white">
        <strong>La liste des clients</strong> <small></small>
      </CCardHeader>
        <table class="table table-striped">
          <thead>
            <tr >
            <th class="">Id</th>
            <th class="">code du client </th>
            <th class="">Nom du client </th>
              <th class="">Téléphone</th>
              <th class="">Adresse </th>
              <th class="">Adresse email</th>
             
            </tr>
          </thead>
          <tbody>
            {this.state.clients.map(client => <tr key={client.id}>
              <td>{this.state.id=client.id}</td>
              <td key={client.id}>{client.code}</td>
              <td key={client.id}>{client.nom}</td>
              <td key={client.id}>{client.tel}</td>
              <td key={client.id}>{client.adresse}</td>
              <td key={client.id}>{client.email}</td>
             
              
              <td><Link
                  to={`/updateClient/${client.id}`}
                  className="btn btn-primary"
                 
                >
                  Consulter
               </Link></td>
              
              <td><Link
                to={`/updateClient/${client.id}`}
                  className="btn btn-secondary"
                 
                >
                  modifier
               </Link></td>
              <td><button type="button" class="btn btn-danger" onClick={ () => this.deleteFournisseur(client.id)}>Supprimer</button></td>
            </tr>)}
          </tbody>
        </table>
        <div className='text-center'>
       
          <Link
                to={`/ajouterClient`}
                  className="btn btn-primary"
                 
                >
                  Ajouter un client
               </Link>
           
          </div>
          </CCard>

    

    );
  }

}


export default ListClients;
