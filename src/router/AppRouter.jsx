import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "../pages/Inicio";


export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path="/*" element={ <Inicio /> } />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
