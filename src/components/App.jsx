import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Menu from './Menu' 
import Usuarios from './usuarios/Usuarios'

const Tasks = () => <h1>HOLA</h1>


const App = () =>  (
  <React.Fragment>
    <BrowserRouter>
      <Menu />
        <div className="margen">
        <Route exact path="/" component={Usuarios} />
        <Route exact path="/tasks" component={Tasks} />
        </div>
    </BrowserRouter>
  </React.Fragment>
);

export default App;