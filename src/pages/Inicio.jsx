import { Banner } from "../components/Banner"
import { NavBar } from "../components/NavBar"
import { Nosotros } from "../components/Nosotros"
import { MisionVision } from "../components/MisionVision"
import { Valores } from "../components/Valores"

export const Inicio = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Nosotros />
      <MisionVision />
      <Valores />
    </>
  )
}
