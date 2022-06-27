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
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

import authHeader from '../services/auth-header.js';

const AddPompe =()=> {
  const navigate = useNavigate()
  const [code,setCode]=useState()
  const[id,setId]=useState()
  const[citerne,setCiterne]=useState()
    
      const handleSubmit = (event) => {
        event.preventDefault(event)
        const data = {
          code: code,
          citerne:citerne,

        }
      
        axios.post('http://localhost:8080/api/station/pompe/AddPompe', data,{ headers: authHeader() }
     )
             .then(res => {
             console.log( data);
             navigate("/stock/listPompes",{ replace: true });
            }).catch(err=>console.error(err))
            
       }
    

    return (

 <>
  
    <CCol xs={12}>
    <CCard className="mb-4" color="white">
      <CCardHeader>
        <strong>Ajouter une Pompe</strong> <small></small>
      </CCardHeader>
      <CCardBody>
          <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel htmlFor="inputEmail4">id</CFormLabel>
              <CFormInput type="text"  name="is" onChange={e => setId(e.target.value)}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputPassword4">code</CFormLabel>
              <CFormInput type="text" name="code" onChange={e => setCode(e.target.value)} />
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputEmail4">Code de citerne reliée</CFormLabel>
              <CFormInput type="text"  name="is" onChange={e => setCiterne(e.target.value)}/>
            </CCol>
            <CCol md={4}>
            </CCol>
            <CRow className="text-center">
            <CCol md={2}>
            </CCol>
            <CCol md={4} className="text-center">
              <CButton type="submit"   onClick={e=>handleSubmit(e)} className=" col-10">Valider la saisie</CButton>
            </CCol>
            <CCol md={4} className="text-center">
              <Link to={`/stock/listPompes`} className="btn btn-primary " >Aller à la liste des pompes</Link>
            </CCol>
            </CRow>
          </CForm>
        
      </CCardBody>
    </CCard>
  </CCol>
 

  </>
 
    )
  }


export default AddPompe