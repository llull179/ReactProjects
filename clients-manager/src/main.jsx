import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Layout from './Components/Layout'
import NuevoCliente, {action as actionNuevoCliente} from './pages/NuevoCliente'
import Index,{loader as clientesLoader} from './pages/Index'
import ErrorPage from './Components/ErrorPage'
import EditarCliente, {loader as editarClienteLoader,action as actionEditarCliente} from './pages/EditarCliente'
import {action as eliminarClienteAction} from './Components/Cliente'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index:true, 
        element:<Index/>,
        loader: clientesLoader,
        errorElement:<ErrorPage/>
      },
      {
        path:'/clientes/nuevo',
        element: <NuevoCliente/>,
        action: actionNuevoCliente,
        errorElement: <ErrorPage/>
      },
      {
        path:'/clientes/:clienteId/editar',
        element: <EditarCliente/>,
        loader: editarClienteLoader,
        errorElement:<ErrorPage/>,
        action: actionEditarCliente

      },
      {
        path:'/clientes/:clienteId/eliminar',
        action: eliminarClienteAction,
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
