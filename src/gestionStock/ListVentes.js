/* eslint-disable */
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import React, { useState, useEffect } from "react"
import authHeader from '../services/auth-header.js';
import {

  CCard
  
} from '@coreui/react'


function ListVentes() {
  const [ventes, setVentes] = useState();

  useEffect(() => {
    axios.get("http://localhost:8080/api/station/Ventes",{ headers: authHeader() }).then((res) => {
        setVentes(res.data) })
  }, []);


     function deleteVente(id){
      
        axios.delete('http://localhost:8080/api/station/vente/delete'+'/'+id,{ headers: authHeader() }).then( res => {
        setVentes(ventes => ventes.filter(vente => vente.id !== id));
             });}
  return  (
  <>
   <CCard className="mb-4" color="white">

      <h5><strong>la liste des ventes</strong></h5>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="">Date de vente </th>
              <th className="">Heur de vente </th>
              <th className="">Nom de Produit</th>
              <th className="">nom client</th>
              <th className="">Quantité vendu en L </th>
              <th className="">prix unitaire en DH </th>
              <th className="">MontantTotal en DH</th>
            </tr>
          </thead>
          <tbody>
          {ventes && ventes.map(vente => <tr key={vente.id}>
              <td key={vente.id}> {vente.date}</td>
              <td key={vente.id}> {vente.heur}</td>
              <td key={vente.id}>{vente.nomProduit}</td>
              <td key={vente.id}>{vente.client}</td>
              <td key={vente.id}>{vente.quantiteVendu}</td>
              <td key={vente.id}>{vente.prixU}</td>
              <td key={vente.id}>{vente.montant}</td>

              <td>
                <Link
                to={`/stock/ConsulterVente/${vente.id}`}
                  className="btn btn-info"
                >
                  consulter
                </Link>
              </td>
              <td>
              <Link
                to={`/stock/ConsulterVente/${vente.id}`}
                  className="btn btn-success"
                 
                >
                  modifier
               </Link>
              </td>
              <td>
                <button type="button" className="btn btn-danger" onClick={() => deleteVente(vente.id)}>
                  Supprimer
                </button>
              </td>
            </tr>)}
          </tbody>
        </table>
        <td>
         <Link to={`/stock/AjouterVente`} className="btn btn-primary">Ajouter une nouvelle vente</Link> 
        </td>
      </CCard>
    </>

  )

}



export default ListVentes
