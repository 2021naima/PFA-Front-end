/* eslint-disable */
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import React, { useState, useEffect } from "react"
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
import { DocsExample } from 'src/components'

import authHeader from '../services/auth-header.js';

const AddProduct=()=> {
  const navigate = useNavigate()
  const [code,setCode]=useState()
  const [designation,setDesignation]=useState()
  const[type,setType]=useState()
  const[prixU,setPrixU]=useState()
  const[quantiteRestante,setQuantiteRestante]=useState()
 
  const handleSubmit = (event) => {
    event.preventDefault(event)
    const data = {
      code: code,
      designation: designation,
      type:type,
      prixU:prixU,
      quantiteRestante:quantiteRestante
    }
  
    axios.post('http://localhost:8080/api/station/produit/AddProduit', data,{ headers: authHeader() }
 )
         .then(res => {
         console.log( data);
         navigate("/stock/listProducts",{ replace: true });
        }).catch(err=>console.error(err))
        
   }

    return (
 
<>
    <CCol xs={12}>
    <CCard className="mb-4" color="white">
      <CCardHeader>
        <strong>veuillez saisir les information du produit</strong> <small></small>
      </CCardHeader>
      <CCardBody>
          <CForm className="row g-3">
            <CCol md={6}>
              <CFormLabel htmlFor="inputEmail4">Le code du produit</CFormLabel>
              <CFormInput type="text"  name="code" onChange={e => setCode(e.target.value)}/>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="inputPassword4">La désignation du produit</CFormLabel>
              <CFormInput type="text" name="designation" onChange={e => setDesignation(e.target.value)} />
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress">Le type du produit </CFormLabel>
              <CFormInput  type="text" name="type"  onChange={e => setType(e.target.value)} />
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress">Prix unitair du produit en DH</CFormLabel>
              <CFormInput type="text" name="prixU" placeholder="" onChange={e => setPrixU(e.target.value)}/>
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress2">quantité dans le stock en L</CFormLabel>
              <CFormInput name="quantiteRestante" placeholder="" onChange={e => setQuantiteRestante(e.target.value)}/>
            </CCol>
            <CCol md={6}>
              <CButton type="submit"   onClick={e=>handleSubmit(e)}>Valider la saisie</CButton>
            </CCol>
            <CCol md={6}>
              <Link to={"/stock/listProducts"} className="btn btn-primary" >Retour à la liste des produits</Link>
            </CCol>
          </CForm>
       
      </CCardBody>
    </CCard>
  </CCol>
  </>


    )
  }


export default AddProduct