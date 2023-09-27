import { Banner } from "../components/Banner"
import { NavBar } from "../components/NavBar"
import { Nosotros } from "../components/Nosotros"
import { MisionVision } from "../components/MisionVision"
import { Valores } from "../components/Valores"
import { Clientes } from "../components/Clientes"

export const Inicio = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Nosotros />
      <MisionVision />
      <Valores />
      <Clientes />
    </>
  )
}
