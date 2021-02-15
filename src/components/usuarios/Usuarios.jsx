import React, { Component } from 'react'

import { connect } from 'react-redux'

import * as UsuariosActios from '../../accions/UsuariosActions'

class Usuarios extends Component{
  
  componentDidMount(){
    this.props.traerTodos();
  } 



 ponerFilas = () => (
   this.props.usuarios.map((users)=> (
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

export default connect(mapStateToProps, UsuariosActios)(Usuarios);

  
