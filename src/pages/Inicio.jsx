import { Banner } from "../components/Banner"
import { Nosotros } from "../components/Nosotros"
import { MisionVision } from "../components/MisionVision"
import { Valores } from "../components/Valores"
import { Clientes } from "../components/Clientes"

export const Inicio = () => {
  return (
    <>
      <Banner />
      <Nosotros />
      <MisionVision />
      <Valores />
      <Clientes />
    </>
  )
}
