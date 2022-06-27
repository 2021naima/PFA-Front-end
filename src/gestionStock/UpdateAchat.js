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

function UpdateAchat() {
  let navigate=useNavigate()
  const { id } = useParams();
  const [achat, setAchat] = useState({
    id:id,
    date: "",
    heur:"",
    nomProduit:"",
    quantiteAjout:"",
    fournisseur:"",
    prixU:"",
    montant:""
  });


 useEffect(() => {
    axios.get('http://localhost:8080/api/station/Achat/'+id,{ headers: authHeader() }).then((res) => {
      setAchat(res.data) })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault(event)
  
    axios.put('http://localhost:8080/api/station/achat/update/'+id, achat,{ headers: authHeader() })
         .then(res => {
         console.log( achat);
         navigate("/stock/ListAchats",{ replace: true });
             }).catch(err=>console.error(err))
   }
   function handle(e){
     const newachat={...achat}
     newachat[e.target.id]=e.target.value
     setAchat(newachat)
   }

  return  (
  <>
    <CCard className="mb-4" color="white">
    <hr/>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="">Id de la livraison</th>
              <th className="">Date de livraison </th>
              <th className="">Heur de livraison</th>
              <th className="">Nom de Produit</th>
              <th className="">nom du fournisseur</th>
              <th className="">Quantité livrée en L</th>
              <th className="">prix unitaire en DH</th>
              <th className="">Montant Total en DH </th>
            </tr>
          </thead>
          <tbody>
         <tr key={achat.id}>
        
              <td > {achat.id}</td>
              <td > {achat.date}</td>
              <td > {achat.heur}</td>
              <td >{achat.nomProduit}</td>
              <td >{achat.fournisseur}</td>
              <td >{achat.quantity}</td>
              <td >{achat.prixU}</td>
              <td >{achat.montant}</td>
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
            <CCol md={4}>
              <CFormLabel htmlFor="inputEmail4">Date de livraison</CFormLabel>
              <CFormInput type="text"  id="date" onChange={(e) =>handle(e)} value={achat.date}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputPassword4">Heur de livraison</CFormLabel>
              <CFormInput type="text" id="heur" onChange={(e) =>handle(e)} value={achat.heur}/>
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress">Type de carburant </CFormLabel>
              <CFormInput type="text" id="nomProduit" placeholder="" onChange={(e) =>handle(e)} value={achat.nomProduit}/>
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress2">quantité livrée en L</CFormLabel>
              <CFormInput id="quantity" placeholder="" onChange={(e) =>handle(e)} value={achat.quantity}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputCity">Nom du Fournisseur</CFormLabel>
              <CFormInput id="fournisseur"  onChange={(e) =>handle(e)} value={achat.fournisseur}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputZip">Prix unitair d'achat en DH</CFormLabel>
              <CFormInput id="prixU" onChange={(e) =>handle(e)} value={achat.prixU} />
            </CCol>
            <CCol md={12}>
            <CCol md={4}>
              <CFormLabel htmlFor="inputZip">Montant Total en DH</CFormLabel>
              <CFormInput  id="montant" onChange={(e) =>handle(e)} value={achat.montant} />
            </CCol>
            </CCol>
            <CCol md={6}>
            <div className="text-center">
              <CButton type="submit"   onClick={(e)=>handleSubmit(e)}>Valider les modifications</CButton>
            </div>
            </CCol>
            <CCol md={6}>
              <Link to={`/stock/ListAchats`} className="btn btn-primary">Retour à la liste des achats</Link>
            </CCol>
          </CForm>
      </CCardBody>
    </CCard>
  </CCol>
    </>
    </>


  )

}
export default UpdateAchat