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

function UpdateClient() {
  let navigate=useNavigate()
  const { id } = useParams();
  const [client, setClient] = useState({
    id:id,
    code:"",
    nom: "",
    tel:"",
    adresse:"",
    email:"",
  });


 useEffect(() => {
    axios.get('http://localhost:8080/api/station/client/'+id,{ headers: authHeader() }).then((res) => {
        setClient(res.data) })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault(event)
  
    axios.put('http://localhost:8080/api/station/client/update/'+id, client,{ headers: authHeader() })
         .then(res => {
         console.log( client);
         navigate("/listClients",{ replace: true });
             }).catch(err=>console.error(err))
   }
   function handle(e){
     const newClient={...client}
     newClient[e.target.id]=e.target.value
     setClient(newClient)
   }

  return  (
  <>
    <CCard className="mb-4" color="white">
    <hr/>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="">code du client</th>
              <th className="">Nom du client </th>
              <th className="">numéro de téléphone</th>
              <th className="">Adresse du client</th>
              <th className="">Adresse email</th>
              
            </tr>
          </thead>
          <tbody>
         <tr key={client.id}>
        
              <td > {client.code}</td>
              <td > {client.nom}</td>
              <td >{client.tel}</td>
              <td >{client.adresse}</td>
              <td >{client.email}</td>
  
            </tr>
          </tbody>
        </table>
      </CCard>
    
      



    <>
    <CCol xs={12}>
    <CCard className="mb-4" color="white">
      <CCardHeader>
        <strong>Modifier les informations du client</strong> <small></small>
      </CCardHeader>
      <CCardBody>
          <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel htmlFor="inputPassword4">code du client</CFormLabel>
              <CFormInput type="text" id="code" onChange={(e) =>handle(e)} value={client.code}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputPassword4">Nom du client</CFormLabel>
              <CFormInput type="text" id="nom" placeholder="nom" onChange={(e) =>handle(e)} value={client.nom}/>
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress">Numéro de téléphone </CFormLabel>
              <CFormInput type="text" id="tel" placeholder="téléphone" onChange={(e) =>handle(e)} value={client.tel}/>
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress2">Adresse du client</CFormLabel>
              <CFormInput id="adresse" placeholder="adresse" onChange={(e) =>handle(e)} value={client.adresse}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputCity">Adresse email</CFormLabel>
              <CFormInput id="email" placeholder="adresse email"  onChange={(e) =>handle(e)} value={client.email}/>
            </CCol>
            <CCol md={6} className="text-center">
              <CButton type="submit"   onClick={(e)=>handleSubmit(e)}>Valider les modifications</CButton>
            </CCol>
            <CCol md={6} className="text-center">
              <Link to={`/listClients`} className="btn btn-info">Retour à la liste des fournisseurs</Link>
            </CCol>
          </CForm>
      </CCardBody>
    </CCard>
  </CCol>
    </>
    </>


  )

}
export default UpdateClient