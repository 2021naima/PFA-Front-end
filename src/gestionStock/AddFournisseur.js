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

const AddFournisseur =()=> {
   const navigate = useNavigate()
   const [code,setCode]=useState()
   const [raisonSocial,setRaisonSocial]=useState()
   const [tel,setTel]=useState()
   const [adresse,setAdresse]=useState()
   const [fax,setFax]=useState()
   const [formeJuridique,setFormeJuridique]=useState()

   
   const handleSubmit = (event) => {
    event.preventDefault(event)
    const data = {
    //  code: code,
      raisonSocial: raisonSocial,
      tel:tel,
      adresse:adresse,
     // fax:fax,
    //  formeJuridique:formeJuridique,
   
    }
  
    axios.post('http://localhost:8080/api/station/fournisseur/addFournisseur', data,{ headers: authHeader() }
 )
         .then(res => {
         console.log( data);
         navigate("/stock/listFournisseurs",{ replace: true });
        }).catch(err=>console.error(err))
        
   }
     

    
     

 
    return (
      

 <>
    <CCol xs={12}>
    <CCard className="mb-4" color="white">
      <CCardHeader>
        <strong>Saisir les informations du fournisseur</strong> <small></small>
      </CCardHeader>
      <CCardBody>
          <CForm className="row g-3">
            <CCol md={6}>
              <CFormLabel htmlFor="inputEmail4">code</CFormLabel>
              <CFormInput type="text"  name="code" onChange={e => setCode(e.target.value)}/>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="inputPassword4">Raison social</CFormLabel>
              <CFormInput type="text" name="raisonSocial" onChange={e => setRaisonSocial(e.target.value)} />
            </CCol>
            <CCol xs={6}>
              <CFormLabel htmlFor="inputAddress">Téléphone </CFormLabel>
              <CFormInput  type="text" name="tel"  onChange={e => setTel(e.target.value)} />
            </CCol>
            <CCol xs={6}>
              <CFormLabel htmlFor="inputAddress">Adresse </CFormLabel>
              <CFormInput type="text" name="adresse" placeholder="" onChange={e => setAdresse(e.target.value)}/>
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress2">Numéro fax</CFormLabel>
              <CFormInput name="fax" placeholder="" onChange={e => setFax(e.target.value)}/>
            </CCol>
            <CCol md={8}>
              <CFormLabel htmlFor="SARL,société anonyme,...">forme juridique</CFormLabel>
              <CFormInput name="formeJuridique"  onChange={e => setFormeJuridique(e.target.value)}/>
            </CCol>
            <CCol md={4}>
            </CCol>
            <CCol md={1}>
              <CButton type="submit"   onClick={e=>handleSubmit(e)}>Valider</CButton>
            </CCol>
            <CCol md={3}>
              <Link to={`/stock/listFournisseurs`} className="btn btn-primary" >Liste des fournisseurs</Link>
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


export default AddFournisseur