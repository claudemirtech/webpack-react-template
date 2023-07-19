import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {PrivateRoute} from './component/PrivateRoute';
import {Home} from './view/Home';
import {Usuario} from './view/Usuario';
import {UsuarioDetail} from './view/UsuarioDetail';
import {Login} from './view/Login';
import {Logout} from './view/Logout';
import './style/App.css';

export default function App() {

  return (
      <Router>
        <Routes>
            <Route exact path='/' element={<PrivateRoute/>}>
                <Route exact path='/' element={<Home/>}/>
            </Route>
            <Route exact path='/usuarios' element={<PrivateRoute/>}>
                <Route path='/usuarios' exact={true} element={<Usuario/>}/>
            </Route>
            <Route  path='/usuarios/:cdusuario' element={<PrivateRoute/>}>
                <Route path='/usuarios/:cdusuario' element={<UsuarioDetail/>}/>
            </Route>
            <Route path={'/login'} exact={true} element={<Login/>}/>
            <Route path={'/logout'} exact={true} element={<Logout/>}/>
        </Routes>
      </Router>
  )
}
