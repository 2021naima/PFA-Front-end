/* eslint-disable */
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import React, { useState, useEffect } from "react"

const TestElement = () => {
  const navigate = useNavigate()
  const [employee, setEmployee] = useState(0)

  useEffect(() => {
    axios.get("http://localhost:8080/api/station/employee/1").then((res) => {
      setEmployee(res.data)
    })
  }, [])

  return (
    <>
      <div>
        <h1 className="text-center">Section produit </h1>
        <h2 className="text-justify">La liste des produits</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="">Id du produit</th>
              <th className="">code de Produit</th>
              <th className="">désignation</th>
              <th className="">Type </th>
              <th className="">prix unitaire </th>
              <th className="">Quantité restante </th>
            </tr>
          </thead>
          <tbody>
            <tr key={employee.id}>
              <td key={employee.id}>
                <input type="text" value={employee.nom} />
              </td>
              <td key={employee.id}>{employee.prenom}</td>
              <td key={employee.id}>{employee.tel}</td>
              <td key={employee.id}>{employee.occupation}</td>

              <td>
                <Link
                to="/stock/consultProduct/${employee.id}"
                  className="btn btn-info"
                  //onClick={() => navigate("/stock/consultProduct/" + employee.id)}
                >
                  consulter
                </Link>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => navigate("/stock/updateProduct/1")}
                >
                  modifier
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-danger">
                  Supprimer
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <td>
          <button type="link" className="btn btn-danger"></button>
        </td>
      </div>
    </>
  )
}

export default TestElement
