import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'


class Usuarios extends Component{
  constructor(){
    super();
    this.state = {
      usuarios: [],
      count: 0,
      alert: 'Not running...'
    }
  }
  async componentDidMount(){
    const API = 'https://jsonplaceholder.typicode.com/users'
    const response = await axios.get(API);
      
    this.setState({
      usuarios: response.data
        
    })
  }



 ponerFilas = () => (
   this.state.usuarios.map((users)=> (
      <tr key={users.id}>
        <td>{users.name}</td>
        <td>{users.email}</td>
        <td>{users.website}</td>
      </tr>
   ))
 )
  


  render() {
    console.log(this.props)
    
    
    return (
    <div>      
    <table className="tabla">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Enlace</th>
        </tr>
      </thead>
      <tbody>
        {this.ponerFilas()}
       
      </tbody>
    </table>
    </div>

  )}

}

const mapStateToProps = (reducers) => {
  return reducers.UsuariosReducers;
}

export default connect(mapStateToProps, {/*actios */})(Usuarios);

  
