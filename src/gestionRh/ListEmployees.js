/* eslint-disable */
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import React, { useState, useEffect } from "react"
import authHeader from '../services/auth-header.js';
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
const ListEmployees =()=> {
  
  const[employees,setEmployees]=useState([])

  useEffect(()=> {
    axios.get('http://localhost:8080/api/station/employee/employees',{ headers: authHeader() }).then(res => {

      setEmployees(res.data )})
    },[]);
 
  const deleteemeploye=(id)=>{
  
    axios.delete('http://localhost:8080/api/station/employee/delete'+'/'+id,{ headers: authHeader() }).then( res => {
      setEmployees(employees=>employees.filter(employee => employee.id!== id));
  });
    console.log("employee dellete success")
}

    return (
    <CCard className="mb-4" color="white">

      <div>
    
      <h5><strong>La liste des employés</strong></h5>
      <hr/>
      <table className="table table-striped">
        <thead>
          <tr >
          <th className="">Id </th>
          <th className="">CIN </th>
            <th className="">Nom </th>
            <th className="">Prénom</th>
             <th className="">Date de naissance </th>
            <th className="">Téléphone </th>
            <th className="">Occupation </th>
            <th className="">Salaire par mois </th>
          </tr>
        </thead>
        <tbody>
          
          {employees && employees.map(employee => <tr key={employee.id}>
            <td key={employee.id}>{employee.id}</td>
            <td key={employee.id}>{employee.cin}</td>
            <td key={employee.id}>{employee.nom}</td>
            <td key={employee.id}>{employee.prenom}</td>
            <td key={employee.id}>{employee.dateNaissance}</td>
            <td key={employee.id}>{employee.tel}</td>
            <td key={employee.id}>{employee.occupation}</td>
            <td key={employee.id}>{employee.salaire}</td>

            
            <td>   
                <Link
                to={`/Rh/updateEmp/${employee.id}`}
                  className="btn btn-info"
                >
                  consulter
                </Link>
              </td>
            <td>  <Link
                to={`/Rh/updateEmp/${employee.id}`}
                  className="btn btn-success">
                  modifier
               </Link>
               </td>
            <td><button type="button" className="btn btn-danger" onClick={ () => deleteemeploye(employee.id)} >Supprimer</button></td>
          </tr>)}
        </tbody>
      </table>

      <div className="text-center"><Link to={"/Rh/addEmp"}  className="btn btn-primary" >Ajouter un nouveau employé</Link></div>

    </div>
    </CCard>

    

    )
}




export default ListEmployees
