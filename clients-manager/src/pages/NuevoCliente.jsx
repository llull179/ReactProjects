import { useNavigate,Form, useActionData,redirect } from "react-router-dom"
import Formulario from "./Formulario"
import Error from "../Components/Error"
import { agregarCliente } from "../data/Clientes"

export async function action({request}) {
    const formData = await request.formData()

    const datos = Object.fromEntries(formData)
    //validation
    const errores = []
    if(Object.values(datos).includes('')){
        errores.push('Todos los campos son obligatorios')
    }
    const email = formData.get('email')
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    if(!regex.test(email)) {
        errores.push('Email no es valido')
    }

    if(Object.keys(errores).length) {
        return errores
    }

    await agregarCliente(datos)
    return redirect('/')
}

function NuevoCliente() {
  
    const navigate = useNavigate()
  
    const errores = useActionData()

    return (
    <>
        <h1 className='font-black text-4xl text-blue-900'>Nuevo cliente</h1>
        <p className='mt-3'> Crea un nuevo clientes</p>
    
        <div className='flex justify-end'>
            <button 
                className='font-bold uppercase text-white bg-blue-600 px-3 py-1'
                onClick={()=> navigate(-1)}
            > Go back</button>
        </div>

        <div className="bg-white shadow rounded-md md:3/4 mx-auto px-5 py-10 mt-15">
            <p>Form</p>

            {errores?.length && errores.map((e,i) =><Error key ={i}>{e}</Error> )}

            <Form 
                method="post"
                noValidate
            >
                <Formulario/>   

                <input type ='submit'
                    className='mt-5 w-full bg-blue-800 text-white text-lg font-bold'
                    value="Registrar client"/>
            </Form>
        </div>
    
    </>

  )
}

export default NuevoCliente