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

class ListProducts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id:'',
      products: []
    }
  
   
}
 
  componentDidMount() {
    axios.get('http://localhost:8080/api/station/produit/produits',{ headers: authHeader() }).then(res => {

      this.setState({ products: res.data });
    })

  }

  updateProduct(){
    this.props.history.push(`/test`);
}
 
 
  deleteproduct(id){
  
    axios.delete('http://localhost:8080/api/station/produit/delete'+'/'+id, { headers: authHeader() }).then( res => {
      this.setState({products: this.state.products.filter(product => product.id !== id)});
  });
    console.log("product delleted success")
}


addProduct(){
  this.props.history.push('/');
}
render() {
    return (
      <CCard className="mb-4" color="white">
        <div className="">
        <h5><strong>La liste des produits</strong></h5>
        </div>
        <br/>
        <table className="table table-striped">
          <thead>
            <tr >
            <th className="">Id du produit</th>
              <th className="">code de Produit</th>
              <th className="">désignation</th>
              <th className="">Type du produit</th>
              <th className="">prix unitaire en DH </th>
              <th className="">Quantité restante en L  </th>
            </tr>
          </thead>
          <tbody>
            
            {this.state.products.map(product => <tr key={product.id}>
             {this.state.id=product.id}
              
              <td key={product.id}>{product.code}</td>
              <td key={product.id}>{product.designation}</td>
              <td key={product.id}>{product.type}</td>
              <td key={product.id}>{product.prixU}</td>
              <td key={product.id}>{product.quantiteRestante}</td>
              <td>
                <Link
                to={`/stock/updateProduct/${product.id}`}
                  className="btn btn-info"
                >
                  consulter
                </Link>
              </td>
              <td>
              <Link
                to={`/stock/updateProduct/${product.id}`}
                  className="btn btn-success"
                 
                >
                  modifier
               </Link>
              </td>
              <td><button type="button" className="btn btn-danger" onClick={ () => this.deleteproduct(product.id)} >Supprimer</button></td>
            </tr>)}
          </tbody>
        </table >
        <div className="text-center">
        <Link to={`/stock/addProduct`} className="btn btn-primary">Ajouter un produit</Link> 
        </div>
        </CCard>

    

    );
  }

}


export default ListProducts;
