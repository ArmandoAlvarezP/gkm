import { Divider } from "../components/Divider"
import { GRP } from "../components/GRP"
import { Informatica } from "../components/Informatica"
import { MenuServicios } from "../components/MenuServicios"
import { Normalizacion } from "../components/Normalizacion"

export const Servicios = () => {
  return (
    <>
        <MenuServicios />
        <GRP />
        <Divider />
        <Normalizacion />
        <Informatica />
    </>
  )
}
