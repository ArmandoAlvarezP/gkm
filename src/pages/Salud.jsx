import { GrayDivider } from "../components/GrayDivider"
import { Mastografias } from "../components/Mastografias"
import { MenuSalud } from "../components/MenuSalud"

export const Salud = () => {
  return (
    <>
      <MenuSalud />
      <Mastografias />
      <GrayDivider />
    </>
  )
}
