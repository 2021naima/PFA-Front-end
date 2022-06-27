/* eslint-disable */
import React, { Component } from 'react'
import axios from 'axios';
import { Outlet, Link } from "react-router-dom";
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
export class ListePompes extends Component {
    constructor(props) {
        super(props)
      this.state = {
        id:'',
        pompes: []
      }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/api/station/pompe/pompes',{ headers: authHeader() }).then(res => {
    
          this.setState({ pompes: res.data });
        })
      }
      deletePompe(id){

        axios.delete('http://localhost:8080/api/station/pompe/delete'+'/'+id,{ headers: authHeader() }).then( res => {
          this.setState({pompes: this.state.pompes.filter(pompe => pompe.id !== id)});
      });
        console.log("pompe delleted successfully")
      }
  render() {
    return (
      <CCard className="mb-4" color="white">
        <h2 class="text-justify">La liste des pompes</h2>
        <table class="table table-striped">
          <thead>
            <tr >
            <th class="">Id de la pompe</th>
            <th class="">code de la pompe</th>
            <th class="">code de citerne reliée</th>
    
             
            </tr>
          </thead>
          <tbody>
            {this.state.pompes.map(pompe => <tr key={pompe.id}>
           
              <td key={pompe.id}>{pompe.id}</td>
              <td key={pompe.id}>{pompe.code}</td>
              <td key={pompe.id}>{pompe.citerne}</td>
              
              <td><Link to={`/stock/updatePompe/${pompe.id}`} class="btn btn-info col">consulter </Link></td>
              <td><Link to={`/stock/updatePompe/${pompe.id}`}  class="btn btn-success ">Modifier </Link></td>
              <td><button type="button" class="btn btn-danger" onClick={ () => this.deletePompe(pompe.id)}>Supprimer</button></td>
            
            </tr>)}
          </tbody>
        </table>
        <div className='text-center'>
          <Link to="/stock/addPompe"  className="btn btn-primary col-4">Ajouter une pompe</Link>
        </div>
     </CCard>
    
    )
  }
}

export default ListePompes