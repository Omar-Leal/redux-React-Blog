import axios from 'axios'
import { CARGANDO, TRAER_TODOS, ERROR } from '../types/usuariosTypes'

export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: CARGANDO
  });
  try {
    const API = 'https://jsonplaceholder.typicode.com/users'
    const response = await axios.get(API)   
    dispatch({
      type: TRAER_TODOS,
      payload: response.data
    })
  } catch (error) {
    console.log('Error: ',error.message);
    dispatch({
      type: ERROR,
      payload: 'Something fails...'
    })
  }
}


//https://dev.to/hemanth/explain-redux-like-im-five


