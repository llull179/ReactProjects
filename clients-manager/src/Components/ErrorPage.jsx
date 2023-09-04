import { useRouteError } from "react-router-dom"

function ErrorPage() {
    const error = useRouteError()
    console.log(error)
  return (
    <div className="space-y-8">
        <h1 className="text-center  text-6xl font-extrabold mt-20 text-blue-900"> ErrorPage</h1>
        <p className="text-center">{error.message || error.statusText} </p>    
    </div>
  )
}

export default ErrorPage