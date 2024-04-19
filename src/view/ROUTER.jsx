import Login from './LOGIN.jsx'
import Home from './HOME.jsx'

function Router({ruta, setRutaActual}){
    switch(ruta){
        case "/home":
            return <Home setRutaActual={setRutaActual}/> 
        case "/login":
            return <Login setRutaActual={setRutaActual} />
        case "/":
            return <Home></Home>
        default:
            return (
                <h1>ruta actual {ruta}</h1>
            )
    }
}
export default Router;