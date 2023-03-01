// components
import { HomeBlogProps } from '../../interface/props'
import Footer from '../global/Footer'
import Global from '../global/Global'
import Navegator from '../global/Navegator'

export default function Certificate({ handleChange }: HomeBlogProps) {
  return (
    <>
      <Navegator activeSection={0} handleChange={handleChange} />
      <Global />
      <Footer />
    </>
  )
}
