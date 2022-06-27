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

const AddEmployee=()=> {
  let navigate=useNavigate()

  const [id,setId]=useState()
  const [nom,setNom]=useState()
  const [prenom,setPrenom]=useState()
  const [tel,setTel]=useState()
  const [occupation,setOccupation]=useState()
  const [dateNaissance,setAge]=useState()
  const [salaire,setSalaire]=useState()
  const[cin,setCin]=useState()

  const handleSubmit = (event) => {
    event.preventDefault(event)
    const data = {
      id: id,
      cin:cin,
      nom: nom,
      prenom:prenom,
      dateNaissance:dateNaissance,
      tel:tel,
      occupation:occupation,
      salaire:salaire

    }
  
    axios.post('http://localhost:8080/api/station/employee/AddEmp', data,{ headers: authHeader() }
 )
         .then(res => {
         console.log( data);
         navigate("/Rh/listEmp",{ replace: true });
        }).catch(err=>console.error(err))
        
   }

    return (
        <>
    <CCol xs={12}>
    <CCard className="mb-4" color="white">
      <CCardHeader>
        <strong>Veuillez Saisir les information de l'employé</strong> <small></small>
      </CCardHeader>
      <CCardBody>
          <CForm className="row g-3">
          <CCol md={3}>
              <CFormLabel htmlFor="inputEmail4">Identifiant</CFormLabel>
              <CFormInput type="text"  name="id" onChange={e => setId(e.target.value)}/>
            </CCol>
            <CCol md={3}>
              <CFormLabel htmlFor="inputEmail4">CIN de l'employé</CFormLabel>
              <CFormInput type="text"  name="cin" onChange={e => setCin(e.target.value)}/>
            </CCol>
            <CCol md={3}>
              <CFormLabel htmlFor="inputPassword4">Le nom de l'employé</CFormLabel>
              <CFormInput type="text" name="nom" onChange={e => setNom(e.target.value)} />
            </CCol>
            <CCol xs={3}>
              <CFormLabel htmlFor="inputAddress">Le prénom </CFormLabel>
              <CFormInput  type="text" name="prenom"  onChange={e => setPrenom(e.target.value)} />
            </CCol>
            <CCol xs={3}>
              <CFormLabel htmlFor="inputAddress">Date de  naissance </CFormLabel>
              <CFormInput type="text" name="dateNaissance" placeholder="jj-mm-yyyy" onChange={e => setAge(e.target.value)}/>
            </CCol>
            <CCol xs={3}>
              <CFormLabel htmlFor="inputAddress2">Numéro de Téléphone</CFormLabel>
              <CFormInput name="tel" placeholder="06-00-00-00-00" onChange={e => setTel(e.target.value)}/>
            </CCol>
            <CCol md={3}>
              <CFormLabel htmlFor="inputZip">Occupation</CFormLabel>
              <CFormInput name="occupation" onChange={e => setOccupation(e.target.value)} />
            </CCol>
            <CCol md={3}>
              <CFormLabel htmlFor="inputZip">Salaire par mois</CFormLabel>
              <CFormInput name="salaire" onChange={e => setSalaire(e.target.value)} />
            </CCol>
            <CCol md={3} className="text-center col-12">
            </CCol>
           
            <CCol md={3} className="text-center col-12">
              <CButton type="submit"   onClick={e=>handleSubmit(e)} className="text-center col-10">Valider</CButton>
            </CCol>
            <CCol md={3} className="text-center col-12">
              <Link to={`/Rh/listEmp`} className="btn btn-primary col-10" >Liste des Emploiyé</Link>
            </CCol>
            <CCol md={3} className="text-center col-12">
            </CCol>
          </CForm>
       
      </CCardBody>
    </CCard>
  </CCol>
  </>
  
    )
}


export default AddEmployee
