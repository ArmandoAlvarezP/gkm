import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import { Layout } from "../layout/Layout";
import { Servicios } from "../pages/Servicios";
import { Educacion } from "../pages/Educacion";
import { Salud } from "../pages/Salud";
import { Contacto } from "../pages/Contacto";


export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Layout /> }>
                <Route index element={ <Inicio /> } />
                <Route path="/servicios" element={ <Servicios /> }/>
                <Route path="/educacion" element={ <Educacion /> }/>
                <Route path="/salud" element={ <Salud/> }/>
                <Route path="/contacto" element={ <Contacto/> } />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
