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

function UpdateCmd() {
  let navigate=useNavigate()
  const { id } = useParams();
  const [cmd, setCmd] = useState({
    id:id,
    dateComande: "",
    nomFournisseur:"",
    nomProduit:"",
    quantite:"",
    prixU:"",
    montantTotal:""
  });


 useEffect(() => {
    axios.get('http://localhost:8080/api/station/commande/'+id,{ headers: authHeader() }).then((res) => {
        setCmd(res.data) })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault(event)
  
    axios.put('http://localhost:8080/api/station/commande/update/'+id,cmd,{ headers: authHeader() })
         .then(res => {
         console.log( cmd);
         navigate("/ListCmds",{ replace: true });
             }).catch(err=>console.error(err))
   }
   function handle(e){
     const newCmd={...cmd}
     newCmd[e.target.id]=e.target.value
     setCmd(newCmd)
   }

  return  (
  <>
    <CCard className="mb-4" color="white">
    <hr/>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="">Identifiant de la commande</th>
              <th className="">Date de la commande </th>
              <th className="">Nom du fournisseur</th>
              <th className="">Nom du produit</th>
              <th className="">Quantité commandée en L</th>
              <th className="">Prix unitaire en DH</th>
              <th className="">Montant total en DH </th>
            </tr>
          </thead>
          <tbody>
         <tr key={cmd.id}>
        
              <td > {cmd.id}</td>
              <td > {cmd.dateComande}</td>
              <td > {cmd.nomFournisseur}</td>
              <td >{cmd.nomProduit}</td>
              <td >{cmd.quantite}</td>
              <td >{cmd.prixU}</td>
              <td >{cmd.montantTotal}</td>
  
            </tr>
          </tbody>
        </table>
      </CCard>
    
      



    <>
    <CCol xs={12}>
    <CCard className="mb-4" color="white">
      <CCardHeader>
        <strong>Modifier les informations de la commande</strong> <small></small>
      </CCardHeader>
      <CCardBody>
          <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel htmlFor="inputPassword4">Date de la commande</CFormLabel>
              <CFormInput type="text" id="dateComande" onChange={(e) =>handle(e)} value={cmd.dateComande}/>
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress">Nom du fournisseur </CFormLabel>
              <CFormInput type="text" id="nomFournisseur" placeholder="" onChange={(e) =>handle(e)} value={cmd.nomFournisseur}/>
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress2">Nom du produit</CFormLabel>
              <CFormInput id="nomProduit" placeholder="" onChange={(e) =>handle(e)} value={cmd.nomProduit}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputCity">Quantité commandée en L</CFormLabel>
              <CFormInput id="quantite"  onChange={(e) =>handle(e)} value={cmd.quantite}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputZip">Prix unitaire en DH</CFormLabel>
              <CFormInput id="prixU" onChange={(e) =>handle(e)} value={cmd.prixU} />
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputZip">Montant total en DH</CFormLabel>
              <CFormInput id="montantTotal" onChange={(e) =>handle(e)} value={cmd.montantTotal} />
            </CCol>
            <CCol md={6} className="text-center">            </CCol>
            <CCol md={3} className="text-center">
              <CButton type="submit"   onClick={(e)=>handleSubmit(e)}>Valider les modifications</CButton>
            </CCol>
            <CCol md={3} className="text-center">
              <Link to={`/ListCmds`} className="btn btn-primary">Retour à la liste des produits</Link>
            </CCol>
          </CForm>
      </CCardBody>
    </CCard>
  </CCol>
    </>
    </>


  )

}
export default UpdateCmd