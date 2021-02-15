import axios from 'axios'

export const traerTodos = () => async (dispatch) => {
  const API = 'https://jsonplaceholder.typicode.com/users'
    const response = await axios.get(API)   
      
  dispatch({
    type: 'traer_usuarios',
    payload: response.data
  })
}


//https://dev.to/hemanth/explain-redux-like-im-five


