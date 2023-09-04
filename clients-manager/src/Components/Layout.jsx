import {Outlet, Link, useLocation} from 'react-router-dom'

function Layout() {

    const location = useLocation()

  return (
    <div className='md:flex md:min-h-screen'>
      <div className='md:w-1/4 bg-blue-900 px-5 py-10'>
            <h2 className='text-4xl font-black text-center text-white'> CRM clients</h2>
            <nav className='mt-10'>
                <Link  to ='/'
                    className={`${location.pathname === '/'? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 `} >Clientes</Link>
                <Link to ='/clientes/nuevo'
                    className={`${location.pathname === '/clientes/nuevo'? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 `} >Nuevo Cliente</Link>
            </nav>
      </div>

      <div className=' md:w-3/4  p-10 md:h-screen overfloww-scroll'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout