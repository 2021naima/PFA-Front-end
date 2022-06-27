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

const AddClient =()=> {
   const navigate = useNavigate()
   const [code,setCode]=useState()
   const [nom,setNom]=useState()
   const [tel,setTel]=useState()
   const [adresse,setAdresse]=useState()
   const [email,setEmail]=useState()
  

   
   const handleSubmit = (event) => {
    event.preventDefault(event)
    const data = {
      code: code,
      nom: nom,
      tel:tel,
      adresse:adresse,
      email:email
    }
  
    axios.post('http://localhost:8080/api/station/client/save', data,{ headers: authHeader() }
 )
         .then(res => {
         console.log( data);
         navigate("/listClients",{ replace: true });
        }).catch(err=>console.error(err))
        
   }
     

    
     

 
    return (
      

 <>
    <CCol xs={12}>
    <CCard className="mb-4" color="white">
      <CCardHeader>
        <strong>veuillez saisir les informations du Client</strong> <small></small>
      </CCardHeader>
      <CCardBody>
          <CForm className="row g-3">
            <CCol md={6}>
              <CFormLabel htmlFor="inputEmail4">code du client</CFormLabel>
              <CFormInput type="text"  name="code" onChange={e => setCode(e.target.value)}/>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="inputPassword4">Nom du client</CFormLabel>
              <CFormInput type="text" name="nom" placeholder="adresse" onChange={e => setNom(e.target.value)} />
            </CCol>
            <CCol xs={6}>
              <CFormLabel htmlFor="inputAddress">Téléphone </CFormLabel>
              <CFormInput  type="text" name="tel" placeholder="Téléphone" onChange={e => setTel(e.target.value)} />
            </CCol>
            <CCol xs={6}>
              <CFormLabel htmlFor="inputAddress">Adresse </CFormLabel>
              <CFormInput type="text" name="adresse" placeholder="adresse" onChange={e => setAdresse(e.target.value)}/>
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress2">Email</CFormLabel>
              <CFormInput name="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
            </CCol>
            <CCol md={4}>
            </CCol>
            <CCol md={1}>
              <CButton type="submit"   onClick={e=>handleSubmit(e)}>Valider</CButton>
            </CCol>
            <CCol md={3}>
              <Link to={`/listClients`} className="btn btn-primary" >Liste des fournisseurs</Link>
            </CCol>
            <CCol md={4}>
            </CCol>
          </CForm>
      </CCardBody>
    </CCard>
  </CCol>
  </>

    )
  }


export default AddClient