/* eslint-disable */
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import React, { useState, useEffect } from "react"
import authHeader from '../services/auth-header.js';
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'


function ListAchats() {
  const [achats, setAchats] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/station/Achats",{ headers: authHeader() }).then((res) => {
      setAchats(res.data) })
  }, []);


     function deleteAchat(id){
      
        axios.delete('http://localhost:8080/api/station/Achat/delete'+'/'+id,{ headers: authHeader() }).then( res => {
          setAchats(achats => achats.filter(achat => achat.id !== id));
             });}
  return  (
  <>
  
      <CCard className="mb-4" color="white">
      <div>
        <h5><strong>la liste des Livraisons</strong></h5>
        <hr/>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="">Id d'Achat</th>
              <th className="">Date Achat </th>
              <th className="">Nom de Produit</th>
              <th className="">fournisseur</th>
              <th className="">Quantité livrée en L</th>
              <th className="">prix unitaire en DH </th>
              <th className="">Montant Total en DH </th>
            </tr>
          </thead>
          <tbody>
          {achats && achats.map(achat => <tr key={achat.id}>
              <td key={achat.id}> {achat.id}</td>
              <td key={achat.id}> {achat.date}</td>
              <td key={achat.id}>{achat.nomProduit}</td>
              <td key={achat.id}>{achat.fournisseur}</td>
              <td key={achat.id}>{achat.quantity}</td>
              <td key={achat.id}>{achat.prixU}</td>
              <td key={achat.id}>{achat.montant}</td>

              <td>
                <Link
                to={`/stock/ConsulterAchat/${achat.id}`}
                  className="btn btn-info"
                >
                  consulter
                </Link>
              </td>
              <td>
              <Link
                to={`/stock/ConsulterAchat/${achat.id}`}
                  className="btn btn-success"
                 
                >
                  modifier
               </Link>
              </td>
              <td>
                <button type="button" className="btn btn-danger" onClick={() => deleteAchat(achat.id)}>
                  Supprimer
                </button>
              </td>
            </tr>)}
          </tbody>
        </table>
        <div className="row">
        <div className="text-center">
         <Link to={`/stock/Achat`} className="btn btn-primary col-3">Ajouter une livraison</Link> 
        </div>
        <br/>
        <br/>
        <div className="text-center">
              <Link to={`/stock/listCiternes`} className="btn btn-primary col-3 ">modifier le stock</Link>
          </div>
          <br/>
          <br/>
              <div className="text-center">
              <Link to={`/stock/stock produits`} className="btn btn-primary col-3" >modifier les citerne</Link>
        </div>
        </div>
      </div>
   </CCard>
   <CRow>
     {/* <CCol xs={6} >
 
        <CCard className="mb-4" color="white">
          <CCardHeader>Vriation des dépenses</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: achats.map(achat=>achat.date),
                datasets: [
                  {
                    label: 'GitHub Commits',
                    backgroundColor: '#f87979',
                    data: achats.map(achat=>achat.montant),
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol> */}
  <CCol xs={8}>
        <CCard className="mb-4" color="white">
          <CCardHeader>Variation des prix unitaires d'achat</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: achats.map(achat=>achat.date),
                datasets: [
                  {
                    label: 'prix unitair d achat',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: achats.map(achat=>achat.prixU),
                  },
                  {
                    label: 'Quantité achetée',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: achats.map(achat=>achat.quantity)
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      </CRow>
    </>

  )

}



export default ListAchats
