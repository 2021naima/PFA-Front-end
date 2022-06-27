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

function UpdateVente() {
  let navigate=useNavigate()
  const { id } = useParams();
  const [vente, setVente] = useState({
    id:id,
    date: "",
    heur:"",
    nomProduit:"",
    client:"",
    prixU:"",
    montant:""
  });


 useEffect(() => {
    axios.get('http://localhost:8080/api/station/vente/'+id,{ headers: authHeader() }).then((res) => {
      setVente(res.data) })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault(event)
  
    axios.put('http://localhost:8080/api/station/vente/update/'+id,vente,{ headers: authHeader() })
         .then(res => {
         console.log( vente);
         navigate("/stock/ListVentes",{ replace: true });
             }).catch(err=>console.error(err))
   }
   function handle(e){
     const newvente={...vente}
     newvente[e.target.id]=e.target.value
     setVente(newvente)
   }

  return  (
  <>
   <CCard className="mb-4" color="white">
    
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="">Id de la vente</th>
              <th className="">Date vente </th>
              <th className="">Heur de vente</th>
              <th className="">Nom de Produit</th>
              <th className="">Nom du client</th>
              <th className="">Quantité vendu en L </th>
              <th className="">prix unitaire en DH </th>
              <th className="">Montant en DH </th>
            </tr>
          </thead>
          <tbody>
         <tr key={vente.id}>
        
              <td > {vente.id}</td>
              <td > {vente.date}</td>
              <td > {vente.heur}</td>
              <td >{vente.nomProduit}</td>
              <td >{vente.client}</td>
              <td >{vente.quantiteVendu}</td>
              <td >{vente.prixU}</td>
              <td >{vente.montant}</td>
            </tr>
          </tbody>
        </table>
        </CCard>
    
      



    <>
    <CCol xs={12}>
    <CCard className="mb-4" color="white">
      <CCardHeader>
        <strong>Modifier la vente</strong> <small></small>
      </CCardHeader>
      <CCardBody>
          <CForm className="row g-3">
            <CCol md={4}>
              <CFormLabel htmlFor="inputEmail4">Date</CFormLabel>
              <CFormInput type="text"  id="date" onChange={(e) =>handle(e)} value={vente.date}/>
            </CCol>
            <CCol md={4}>
              <CFormLabel htmlFor="inputPassword4">Heur</CFormLabel>
              <CFormInput type="text" id="heur" onChange={(e) =>handle(e)} value={vente.heur}/>
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress">Type de carburant </CFormLabel>
              <CFormInput type="text" id="nomProduit" placeholder="1234 Main St" onChange={(e) =>handle(e)} value={vente.nomProduit}/>
            </CCol>
            <CCol xs={4}>
              <CFormLabel htmlFor="inputAddress2">quantité vendu en L</CFormLabel>
              <CFormInput id="quantiteVendu" placeholder="Apartment, studio, or floor" onChange={(e) =>handle(e)} value={vente.quantiteVendu}/>
            </CCol>
            <CCol md={3}>
              <CFormLabel htmlFor="inputCity">nom du client</CFormLabel>
              <CFormInput id="client"  onChange={(e) =>handle(e)} value={vente.client}/>
            </CCol>
            <CCol md={2}>
              <CFormLabel htmlFor="inputZip">Prix unitair d'achat en DH</CFormLabel>
              <CFormInput id="prixU" onChange={(e) =>handle(e)} value={vente.prixU} />
            </CCol>
            <CCol md={3} >
              <CFormLabel htmlFor="inputZip"   >Montant Total en DH</CFormLabel>
              <CFormInput className="col-6" id="montant" onChange={(e) =>handle(e)} value={vente.montant} />
            </CCol>
            <CCol md={6}>
              <CButton type="submit"   onClick={(e)=>handleSubmit(e)}>Edit</CButton>
            </CCol>
            <CCol md={6}>
              <Link to={`/stock/ListVentes`} className="btn btn-info">Retour</Link>
            </CCol>
          </CForm>
      </CCardBody>
    </CCard>
  </CCol>
    </>
    </>


  )

}
export default UpdateVente