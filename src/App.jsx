import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthLayout } from './layout/AuthLayout';
import RoutaProtegida from './layout/RoutaProtegida';

import { Login } from './pages/Login';
import { ConfirmarCuenta } from './pages/ConfirmarCuenta';
import { OlvidePassword } from './pages/OlvidePassword';
import { Registrar } from './pages/Registrar';

import { AuthProvider } from './context/AuthProvider';
import { PacientesProvider } from './context/PacientesProvider';


import NuevoPassword from './pages/NuevoPassword';
import AdministrarPacientes from './pages/AdministrarPacientes';
import EditarPerfil from './pages/EditarPerfil';
import CambiarPassword from './pages/CambiarPassword';



function App() {


  return (
      <BrowserRouter>
        <AuthProvider>
          <PacientesProvider>
            <Routes>

              {/* Area Publica */}
              <Route path='/' element={<AuthLayout />}>

                  {/* cargar la pagina principal de un layout */}
                  <Route index element={<Login />}/>
                  <Route path='registrar' element={<Registrar/>} />
                  <Route path='olvide-password' element={<OlvidePassword/>} />
                  <Route path='olvide-password/:token' element={<NuevoPassword/>} />
                  <Route path='confirmar-cuenta/:id' element={<ConfirmarCuenta/>} />

              </Route>

              {/* area privada */}
              <Route path="/admin" element={<RoutaProtegida />}>
                <Route index element={<AdministrarPacientes />} />
                <Route path='perfil' element={<EditarPerfil />} />
                <Route path='cambiar-password' element={<CambiarPassword />} />
              </Route>

            </Routes>
          </PacientesProvider>
        </AuthProvider>
      </BrowserRouter>
  )
}

export default App
