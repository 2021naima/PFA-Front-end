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

function UpdateEmploye() {
  let navigate=useNavigate()
  const { id } = useParams();
  const [employe, setEmploye] = useState({
    id:id,
    cin: "",
    nom:"",
    prenom:"",
    dateNaissance:"",
    tel:"",
    occupation:"",
    salaire:""
  });


 useEffect(() => {
    axios.get('http://localhost:8080/api/station/employee/'+id,{ headers: authHeader() }).then((res) => {
      setEmploye(res.data) })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault(event)
  
    axios.put('http://localhost:8080/api/station/employee/update/'+id, employe,{ headers: authHeader() })
         .then(res => {
         console.log( employe);
         navigate(`/Rh/listEmp`,{ replace: true });
             }).catch(err=>console.error(err))
   }
   function handle(e){
     const newEmp={...employe}
     newEmp[e.target.id]=e.target.value
     setEmploye(newEmp)
   }

  return  (
  <>
    <CCard className="mb-4" color="white">
      <strong>les information de l'employé</strong>
    <hr/>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="">Id de l'employé</th>
              <th className="">CIN </th>
              <th className="">Nom </th>
              <th className="">prénom</th>
              <th className="">date de naissance</th>
              <th className="">numéro de téléphone </th>
              <th className="">Occupation</th>
              <th className="">Salaire </th>
            </tr>
          </thead>
          <tbody>
         <tr key={employe.id}>
        
              <td > {employe.id}</td>
              <td > {employe.cin}</td>
              <td > {employe.nom}</td>
              <td >{employe.prenom}</td>
              <td > {employe.dateNaissance}</td>
              <td > {employe.tel}</td>
              <td >{employe.occupation}</td>
              <td >{employe.salaire}</td>
  
            </tr>
          </tbody>
        </table>
      </CCard>
    
      



    <>
    <CCol xs={12}>
    <CCard className="mb-4" color="white">
      <CCardHeader>
        <strong>Modifier les informations de la livraison</strong> <small></small>
      </CCardHeader>
      <CCardBody>
          <CForm className="row g-3">
            <CCol md={2}>
              <CFormLabel htmlFor="inputEmail4">CIN  de l'employé</CFormLabel>
              <CFormInput type="text"  id="cin" onChange={(e) =>handle(e)}  value={employe.cin}/>
            </CCol>
            <CCol md={3}>
              <CFormLabel htmlFor="inputPassword4">Le nom de l'employé</CFormLabel>
              <CFormInput type="text" id="nom" onChange={(e) =>handle(e)} value={employe.nom}/>
            </CCol>
            <CCol xs={3}>
              <CFormLabel htmlFor="inputAddress">Le prénom </CFormLabel>
              <CFormInput type="text" id="prenom" placeholder="" onChange={(e) =>handle(e)} value={employe.prenom}/>
            </CCol>
            
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress2">Date de  naissance</CFormLabel>
              <CFormInput id="dateNaissance" placeholder="jj-mm-yy" onChange={(e) =>handle(e)} value={employe.dateNaissance}/>
            </CCol>
           
            <CCol md={4}>
              <CFormLabel htmlFor="inputCity">Numéro de Téléphone</CFormLabel>
              <CFormInput id="tel"  onChange={(e) =>handle(e)} placeholder="06-00-00-00-00"  value={employe.tel}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputZip">Occupation</CFormLabel>
              <CFormInput id="occupation" onChange={(e) =>handle(e)} value={employe.occupation} />
            </CCol>
            
            <CCol md={4}>
              <CFormLabel htmlFor="inputZip">Salaire par mois</CFormLabel>
              <CFormInput id="salaire" onChange={(e) =>handle(e)} value={employe.salaire} />
            </CCol>
            <CCol md={5} className="text-center">
            </CCol>
            <CCol md={3} className="text-center">
              <CButton type="submit"   onClick={(e)=>handleSubmit(e)}>Valider les modifications</CButton>
            </CCol>
            <CCol md={4} className="text-center">
              <Link to={`/Rh/listEmp`} className="btn btn-primary">Retour à la liste des employés</Link>
            </CCol>
          </CForm>
      </CCardBody>
    </CCard>
  </CCol>
    </>
    </>


  )

}
export default UpdateEmploye