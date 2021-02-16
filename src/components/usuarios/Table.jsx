import React from 'react';
import { connect } from 'react-redux';

const Table = (props) => {

	const ponerFilas = () => props.usuarios.map((users) => (
		<tr key={ users.id }>
			<td>
				{ users.name }
			</td>
			<td>
				{ users.email }
			</td>
			<td>
				{ users.website }
			</td>
		</tr>
	));

	return (
		<table className="tabla">
			<thead>
				<tr>
					<th>
						Nombre
					</th>
					<th>
						Correo
					</th>
					<th>
						Enlace
					</th>
				</tr>
			</thead>
			<tbody>
				{ ponerFilas() }
			</tbody>
		</table>
	)
}

const mapStateToProps = (reducers) => {
	return reducers.UsuariosReducer;
};

export default connect(mapStateToProps)(Table);