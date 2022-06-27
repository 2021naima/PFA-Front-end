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

const AjouterCommande=()=> {
  const navigate = useNavigate()
  const [id,setId]=useState()
  const [dateComande,setDateCmd]=useState()
  const [nomFournisseur,setNomFournisseur]=useState()
  const[nomProduit,setNomProduit]=useState()
  const[quantite,setQuantite]=useState()
  const[prixU,setPrixU]=useState()
  const[montantTotal,setMontantTotal]=useState()

 
  const handleSubmit = (event) => {
    event.preventDefault(event)
    const data = {
        id:id,
        dateComande: dateComande,
        nomFournisseur: nomFournisseur,
        nomProduit:nomProduit,
        quantite:quantite,
        prixU:prixU,
        montantTotal:montantTotal
    }
  
    axios.post('http://localhost:8080/api/station/commande/save', data,{ headers: authHeader() }
 )
         .then(res => {
         console.log( data);
         navigate("/ListCmds",{ replace: true });
        }).catch(err=>console.error(err))
        
   }

    return (
 
<>
    <CCol xs={12}>
    <CCard className="mb-4" color="white">
      <CCardHeader>
        <strong>veuillez saisir la commande</strong> <small></small>
      </CCardHeader>
      <CCardBody>
          <CForm className="row g-3">
            <CCol md={6}>
              <CFormLabel htmlFor="inputEmail4">La date de la commande</CFormLabel>
              <CFormInput type="text"  name="dateComande" onChange={e => setDateCmd(e.target.value)}/>
            </CCol>
            <CCol md={6}>
              <CFormLabel htmlFor="inputPassword4">Le nom du fournisseur</CFormLabel>
              <CFormInput type="text" name="nomFournisseur" onChange={e => setNomFournisseur(e.target.value)} />
            </CCol>
            <CCol xs={3}>
              <CFormLabel htmlFor="inputAddress">Le produit commandé </CFormLabel>
              <CFormInput  type="text" name="nomProduit"  onChange={e => setNomProduit(e.target.value)} />
            </CCol>
            <CCol xs={3}>
              <CFormLabel htmlFor="inputAddress">La quantité commandée en L </CFormLabel>
              <CFormInput type="text" name="quantite" placeholder="" onChange={e => setQuantite(e.target.value)}/>
            </CCol>
            <CCol xs={3}>
              <CFormLabel htmlFor="inputAddress2">Le prix unitair en DH</CFormLabel>
              <CFormInput name="prixU" placeholder="" onChange={e => setPrixU(e.target.value)}/>
            </CCol>
            <CCol xs={3}>
              <CFormLabel htmlFor="inputAddress2">Le montant total en DH</CFormLabel>
              <CFormInput name="montantTotal" placeholder="" onChange={e => setMontantTotal(e.target.value)}/>
            </CCol>
            <CCol md={4} className="text-center">
              <CButton type="submit"   onClick={e=>handleSubmit(e)} className="col-10">Valider la saisie</CButton>
            </CCol>
            <CCol md={4}  className="text-center">
              <Link to={"/ListCmds"} className="btn btn-primary" >Retour à la liste des commande</Link>
            </CCol>
            <CCol md={4}  className="text-center">
              <Link to={"/AddCmd"} className="btn btn-primary" >Saisir une autre commande</Link>
            </CCol>
          </CForm>
       
      </CCardBody>
    </CCard>
  </CCol>
  </>


    )
  }


export default AjouterCommande