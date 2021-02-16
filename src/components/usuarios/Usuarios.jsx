import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as UsuariosActions from '../../accions/UsuariosActions'
import Loader from '../loader/Loader'
import Error404 from '../Error404/Error404'
import Table from './Table'

class Usuarios extends Component{
  
  async componentDidMount(){
    this.props.traerTodos();
  }


  printContent = () => {
    if (this.props.loading) {
			return <Loader />;
		}

		if (this.props.error) {
			return <Error404 mensaje={ this.props.error } />;
		}

		return <Table />
  }

  render() { 
    console.log('esot?->',this.props.usuarios)
    return (
    <div>      
      {this.printContent()}
    </div>

  )}

}


const mapStateToProps = (reducers) => {
  return reducers.UsuariosReducers;
}

export default connect(mapStateToProps, UsuariosActions)(Usuarios);
