import { ComponenteMenú } from "../Components/ComponenteMenú/ComponenteMenú"
import menú from '../data/menu.json'

export const Menú = () => {
  return (
    <>
      <ComponenteMenú menú={menú}/>
    </>
  )
}
