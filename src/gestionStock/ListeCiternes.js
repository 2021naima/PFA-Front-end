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
export class ListeCiternes extends Component {
    constructor(props) {
        super(props)
      this.state = {
        id:'',
        citernes: []
    
      }
    }
      componentDidMount() {
        axios.get('http://localhost:8080/api/station/citerne/citernes',{ headers: authHeader() }).then(res => {
    
          this.setState({ citernes: res.data });
        })
    
      }
      deleteCiterne(id){
      
        axios.delete('http://localhost:8080/api/station/citerne/delete'+'/'+id,{ headers: authHeader() }).then( res => {
          this.setState({citernes: this.state.citernes.filter(citerne => citerne.id !== id)});
      });
        console.log("employee dellete success")
    }
  render() {
    return (
    <CCard className="mb-4" color="white">
       <hr/>
        <div>
      
      <h5 >La liste des Citernes</h5>
      <table className="table table-striped" >
        <thead>
          <tr >
          <th className="">Id </th>
            <th className="">code </th>
            <th className="">capacité en L </th>
            <th className="">carburant</th>
            <th className="">Stock restant en L</th>
           
            
            
          </tr>
        </thead>
        <tbody>
          
          {this.state.citernes.map(citerne => <tr key={citerne.id}>
            
           <td key={citerne.id}>{this.state.id=citerne.id}</td>
           <td key={citerne.id}>{citerne.code}</td>
            <td key={citerne.id}>{citerne.capacite}</td>
            <td key={citerne.id}>{citerne.produit}</td>
            <td key={citerne.id}>{citerne.stockRestant}</td>
          
            <td> 
              <Link
                to={`/stock/ConsulterCiterne/${citerne.id}`}
                  className="btn btn-info"
                 
                >
                  Consulter
               </Link></td>
            <td><Link
                to={`/stock/ConsulterCiterne/${citerne.id}`}
                 className="btn btn-success"                
                >
                  Modifier
               </Link></td>
            <td><button type="button" className="btn btn-danger" onClick={ () => this.deleteCiterne(citerne.id)} >Supprimer</button></td>
          </tr>)}
        </tbody>
      </table>
      <div className='text-center'>
      <Link to='/stock/addCitern' className="btn btn-primary" >Ajouter une citerne</Link>
      </div>
    </div>
    </CCard>

    )
  }
}

export default ListeCiternes