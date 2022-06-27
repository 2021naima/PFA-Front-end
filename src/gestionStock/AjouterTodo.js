/* eslint-disable */
import React, { Component } from 'react'
import axios from 'axios'



export class AjouterTodo extends Component {
    constructor(props) {
        super(props);
      
      this.state={
           id:'',
           description:'',
           day:'',
           mounth:'',
           year:'',
           hour:''
          
       }
      
      }

      handleChange = event => {
        this.setState({ [event.target.name]:event.target.value });
      }
      handleSubmit = event => {
        event.preventDefault()
       axios.post('http://localhost:8080/api/station/ToDo/createToDoItem', this.state,{ headers: authHeader() }
    )
            .then(res => {
            console.log( this.state);
                })
      }    

  render() {
    return (
        <div classeName="container " style={{  padding: '150px 50px 75px 200px '} }>
       <div  class="card border border-1" style={{width:'600px',  padding: '10px 50px 75px 100px' ,  backgroundColor: 'white'} }>
           <div className="card-body">
           <form onSubmit={(e) =>this.handleSubmit(e)}>
  <div className="row">
  <div className="col-sm2">
    
      <div className="form-outline">
      <h1 className='text-primary' htmlFor="form8Example1" style={{textAlign:'center' ,paddingTop: '10px ',paddingRight: '60px ', paddingBottom:'80px'} }>Ajouter un Employé </h1>
        
      </div>
    </div>
    <div className="col-sm2">
      {/* Name input */}
      <div className="form-outline">
      <label className="form-label " htmlFor="form8Example1" style={{width:'200px'} }  >id</label>
        <input type="text" id="form8Example1" className="form-control w-25 bg-info mt-2 p" style={{width:'200px'} } name="id"  onChange={ (e) => this.handleChange(e)} />
        
      </div>
    </div>
    <div className="col-sm2">
      {/* Email input */}
      <div className="form-outline">
      <label className="form-label" htmlFor="form8Example2" style={{width:'200px'} } >description</label>
        <input type="text" id="form8Example2" className="form-control" style={{width:'200px'} }  name="description"  onChange={ (e) => this.handleChange(e)}/>
     
      </div>
    </div>
  </div>
  <hr />
  <div className="row">
    <div className="col">
      {/* Name input */}
      <div className="form-outline">
      <label className="form-label" htmlFor="form8Example3"  style={{width:'200px'} }>day</label>
        <input type="text" id="form8Example3" className="form-control" style={{width:'200px'} }  name="day"   onChange={ (e) => this.handleChange(e)} />
       
      </div>
    </div>
    <div className="col">
      {/* Name input */}
      <div className="form-outline">
      <label className="form-label" htmlFor="form8Example4" style={{width:'200px'} }>mounth</label>
        <input type="text" id="form8Example4" className="form-control"  style={{width:'200px'} } name="mounth"   onChange={ (e) => this.handleChange(e)}/>
       
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
      <label className="form-label" htmlFor="form8Example5" style={{width:'200px'} } >   year</label>
        <input type="text" id="form8Example5" className="form-control" style={{width:'200px'} } name="year"  onChange={ (e) => this.handleChange(e)} />
      
      </div>
      
    </div>
    <div className="col">
      <div className="form-outline">
      <label className="form-label" htmlFor="form8Example5" style={{width:'200px'} } >   hour</label>
        <input type="text" id="form8Example5" className="form-control" style={{width:'200px'} } name="hour"  onChange={ (e) => this.handleChange(e)} />
      
      </div>
      
    </div>
    
    </div>
    <div className="row">
    <div className="col">
      <div className="form-outline"  >
      <input type="submit" class="btn btn-primary" style={{width:'80px', paddingLeft:'5'} }  value="Ajouter" onClick={ (e) => this.handleSubmit(e)} />
     
      </div>
      </div>
    
      
  </div>
  </form>
  </div>
</div>
</div>
    )
  }
}

export default AjouterTodo