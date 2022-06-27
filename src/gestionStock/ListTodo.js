/* eslint-disable */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Outlet, Link } from "react-router-dom"
import authHeader from '../services/auth-header.js';

class ListTodo extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    id:'',
    TodoItems: []
  }
}
  componentDidMount() {
    axios.get('http://localhost:8080/api/station/ToDo/taches',{ headers: authHeader() }).then(res => {

      this.setState({ TodoItems: res.data })
    })
  }

  deleteItem(id){

  axios.delete('http://localhost:8080/api/station/ToDo/taches'+'/'+id,{ headers: authHeader() }).then( res => {
    this.setState({TodoItems: this.state.TodoItems.filter(item => item.id !== id)})
});
  console.log("ToDo dellete with success")
}

render() {
    return (
      <div>
        <h1 class="text-center">Section Fournisseurs </h1>
        <h2 class="text-justify">La liste des Fournisseurs</h2>
        <table class="table table-striped">
          <thead>
            <tr >
            <th class="">Id</th>
            <th class="">description</th>
              <th class="">day</th>
              <th class="">mounth </th>
              <th class="">year </th>
              <th class="">hour </th>
             
            </tr>
          </thead>
          <tbody>
            {this.state.TodoItems.map(item => <tr key={item.id}>
              {this.state.id=item.id}
              <td key={item.id}>{item.description}</td>
              <td key={item.id}>{item.day}</td>
              <td key={item.id}>{item.mounth}</td>
              <td key={item.id}>{item.year}</td>
              <td key={item.id}>{item.hour}</td>
              <td><button type="button" class="btn btn-danger" onClick={ () => this.deleteItem(item.id)}>Supprimer</button></td>
              <td><button type="button" class="btn btn-success">Modifier</button></td>
            </tr>)}
          </tbody>
        </table>
       
      </div>
    

    )
  }

}


export default ListTodo
