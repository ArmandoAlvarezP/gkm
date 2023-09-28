import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Mascota } from "../components/Mascota";

export const Layout = () => {
  return (
    <>
        <NavBar />
            <Outlet />
        <Mascota />
        <Footer />
    </>
  )
}
