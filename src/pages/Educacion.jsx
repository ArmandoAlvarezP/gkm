import { Capacitacion } from "../components/Capacitacion"
import { Divider } from "../components/Divider"
import { MenuEducacion } from "../components/MenuEducacion"
import { Prepa } from "../components/Prepa"

export const Educacion = () => {
  return (
    <>
      <MenuEducacion />
      <Capacitacion />
      <Divider />
      <Prepa />
    </>
  )
}
