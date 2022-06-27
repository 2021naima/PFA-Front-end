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
class ListUsers extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    id:'',
    users: []
  }
}
  componentDidMount() {
    axios.get('http://localhost:8080/api/station/user/all',{ headers: authHeader() }).then(res => {

      this.setState({ users: res.data });
    })
  }

  deleteUser(id){

  axios.delete('http://localhost:8080/api/station/user'+'/'+id,{ headers: authHeader() }).then( res => {
    this.setState({users: this.state.users.filter(user => user.id !== id)});
});
  console.log("user delleted!!")
}

render() {
    return (
      <CCard className="mb-4" color="white">
        <CCardHeader color="white">
        <strong>La liste des utilisateurs</strong> <small></small>
      </CCardHeader>
        <table class="table table-striped">
          <thead>
            <tr >
            <th class="">CIN</th>
            <th class="">Nom d'utilisateur </th>
              <th class="">Numéro de téléphone</th>
              <th class="">Adresse email</th>
             
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => <tr key={user.id}>
               <td key={user.id}>{user.cin}</td> 
              <td key={user.id}>{user.username}</td>
              <td key={user.id}>{user.tel}</td>
            <td key={user.id}>{user.email}</td> 
             
              
              <td><Link
                  to={`/updateUser/${user.id}`}
                  className="btn btn-primary"
                 
                >
                  Consulter
               </Link></td>
              
              <td><Link
                to={`/updateUser/${user.id}`}
                  className="btn btn-secondary"
                 
                >
                  modifier
               </Link></td>
              <td><button type="button" class="btn btn-danger" onClick={ () => this.deleteUser(user.id)}>Supprimer</button></td>
            </tr>)}
          </tbody>
        </table>
        <div className='text-center'>
       
          <Link
                to={`/addUser`}
                  className="btn btn-primary"
                 
                >
                  Ajouter un utilisateur
               </Link>
           
          </div>
          </CCard>

    

    );
  }

}


export default ListUsers;
