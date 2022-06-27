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
  CFormCheck,
  CFormInput,
  CFormLabel,
} from '@coreui/react'
import { DocsExample } from 'src/components'

function UpdateFournisseur() {
  let navigate=useNavigate()
  const { id } = useParams();
  const [fournisseur, setFournisseur] = useState({
    id:id,
    raisonSocial: "",
    tel:"",
    fax:"",
    adresse:"",
    email:"",
    formeJuridique:""
  });


 useEffect(() => {
    axios.get('http://localhost:8080/api/station/fournisseur/'+id,{ headers: authHeader() }).then((res) => {
        setFournisseur(res.data) })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault(event)
  
    axios.put('http://localhost:8080/api/station/fournisseur/update/'+id, fournisseur,{ headers: authHeader() })
         .then(res => {
         console.log( fournisseur);
         navigate("/stock/listFournisseurs",{ replace: true });
             }).catch(err=>console.error(err))
   }
   function handle(e){
     const newfournisseur={...fournisseur}
     newfournisseur[e.target.id]=e.target.value
     setFournisseur(newfournisseur)
   }

  return  (
  <>
    <CCard className="mb-4" color="white">
    <hr/>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="">Id du fournisseur</th>
              <th className="">Raison social </th>
              <th className="">numéro de téléphone</th>
              <th className="">numéro du fax</th>
              <th className="">Adresse du fournisseur</th>
              <th className="">Adresse email</th>
              <th className="">Forme juridique </th>
            </tr>
          </thead>
          <tbody>
         <tr key={fournisseur.id}>
        
              <td > {fournisseur.id}</td>
              <td > {fournisseur.raisonSocial}</td>
              <td >{fournisseur.tel}</td>
              <td >{fournisseur.fax}</td>
              <td >{fournisseur.adresse}</td>
              <td >{fournisseur.email}</td>
              <td >{fournisseur.formeJuridique}</td>
  
            </tr>
          </tbody>
        </table>
      </CCard>
    
      



    <>
    <CCol xs={12}>
    <CCard className="mb-4" color="white">
      <CCardHeader>
        <strong>Modifier les informations du fournisseur</strong> <small></small>
      </CCardHeader>
      <CCardBody>
          <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel htmlFor="inputPassword4">Raison social</CFormLabel>
              <CFormInput type="text" id="raisonSocial" onChange={(e) =>handle(e)} value={fournisseur.raisonSocial}/>
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress">Numéro de téléphone </CFormLabel>
              <CFormInput type="text" id="tel" placeholder="1234 Main St" onChange={(e) =>handle(e)} value={fournisseur.tel}/>
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress">Numéro du Fax </CFormLabel>
              <CFormInput type="text" id="fax" placeholder="" onChange={(e) =>handle(e)} value={fournisseur.fax}/>
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress2">Adresse du fournisseur</CFormLabel>
              <CFormInput id="adresse" placeholder="Apartment, studio, or floor" onChange={(e) =>handle(e)} value={fournisseur.adresse}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputCity">Adresse email</CFormLabel>
              <CFormInput id="email"  onChange={(e) =>handle(e)} value={fournisseur.email}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputZip">Forme juridique</CFormLabel>
              <CFormInput id="formeJuridique" onChange={(e) =>handle(e)} value={fournisseur.formeJuridique} />
            </CCol>
            <CCol md={6} className="text-center">
              <CButton type="submit"   onClick={(e)=>handleSubmit(e)}>Valider les modifications</CButton>
            </CCol>
            <CCol md={6} className="text-center">
              <Link to={`/stock/listFournisseurs`} className="btn btn-info">Retour à la liste des fournisseurs</Link>
            </CCol>
          </CForm>
      </CCardBody>
    </CCard>
  </CCol>
    </>
    </>


  )

}
export default UpdateFournisseur