/* eslint-disable */
import { useNavigate, Link,  useParams } from "react-router-dom"
import axios from "axios"
import authHeader from '../services/auth-header.js';

import React, { useState, useEffect } from "react"
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
} from '@coreui/react'
import { DocsExample } from 'src/components'

function UpdateProduct() {
  let navigate=useNavigate()
  const { id } = useParams();
  const [produit, setProduit] = useState({
    id:id,
    code: "",
    designation:"",
    type:"",
    prixU:"",
    quantiteRestante:""
  });


 useEffect(() => {
    axios.get('http://localhost:8080/api/station/produit/'+id,{ headers: authHeader() }).then((res) => {
      setProduit(res.data) })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault(event)
  
    axios.put('http://localhost:8080/api/station/produit/update/'+id, produit,{ headers: authHeader() })
         .then(res => {
         console.log( produit);
         navigate("/stock/listProducts",{ replace: true });
             }).catch(err=>console.error(err))
   }
   function handle(e){
     const newproduit={...produit}
     newproduit[e.target.id]=e.target.value
     setProduit(newproduit)
   }

  return  (
  <>
    <CCard className="mb-4" color="white">
    <hr/>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="">Id du produit</th>
              <th className="">Code du produit </th>
              <th className="">désignation du produit</th>
              <th className="">Type du Produit</th>
              <th className="">Prix unitaire du produit en DH</th>
              <th className="">Quantité restante du produit en L </th>
            </tr>
          </thead>
          <tbody>
         <tr key={produit.id}>
        
              <td > {produit.id}</td>
              <td > {produit.code}</td>
              <td > {produit.designation}</td>
              <td >{produit.type}</td>
              <td >{produit.prixU}</td>
              <td >{produit.quantiteRestante}</td>
  
            </tr>
          </tbody>
        </table>
      </CCard>
    
      



    <>
    <CCol xs={12}>
    <CCard className="mb-4" color="white">
      <CCardHeader>
        <strong>Modifier les informations du produit</strong> <small></small>
      </CCardHeader>
      <CCardBody>
          <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel htmlFor="inputEmail4">id du produit</CFormLabel>
              <CFormInput type="text"  id="id"  value={produit.id}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputPassword4">Code du produit</CFormLabel>
              <CFormInput type="text" id="code" onChange={(e) =>handle(e)} value={produit.code}/>
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress">Désignation du produit </CFormLabel>
              <CFormInput type="text" id="designation" placeholder="" onChange={(e) =>handle(e)} value={produit.designation}/>
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress2">Type du produit</CFormLabel>
              <CFormInput id="type" placeholder="" onChange={(e) =>handle(e)} value={produit.type}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputCity">Prix unitair du produit en DH</CFormLabel>
              <CFormInput id="prixU"  onChange={(e) =>handle(e)} value={produit.prixU}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputZip">Quantité restante du produit en L</CFormLabel>
              <CFormInput id="quantiteRestante" onChange={(e) =>handle(e)} value={produit.quantiteRestante} />
            </CCol>
            <CCol md={6} className="text-center">            </CCol>
            <CCol md={3} className="text-center">
              <CButton type="submit"   onClick={(e)=>handleSubmit(e)}>Valider les modifications</CButton>
            </CCol>
            <CCol md={3} className="text-center">
              <Link to={`/stock/listProducts`} className="btn btn-primary">Retour à la liste des produits</Link>
            </CCol>
          </CForm>
      </CCardBody>
    </CCard>
  </CCol>
    </>
    </>


  )

}
export default UpdateProduct