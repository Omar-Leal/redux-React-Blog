import { TRAER_TODOS, CARGANDO, ERROR } from '../types/usuariosTypes'

const INITIAL_STATE = {
  usuarios: [1,2,3],
  loading: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TRAER_TODOS:
      return { 
        ...state, 
        usuarios: action.payload,
        loading: false,
      };

    case CARGANDO: 
      return {...state, loading: true};


    case ERROR:
      return {...state, error: action.payload}  
      default: return state;
  }
}