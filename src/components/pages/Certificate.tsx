// components
import { HomeBlogProps } from '../../interface/props'
import Footer from '../global/Footer'
import Global from '../global/Global'
import Navegator from '../global/Navegator'
import Main from './certificate/Main'

export default function Certificate({ handleChange }: HomeBlogProps) {
  return (
    <>
      <Navegator activeSection={0} handleChange={handleChange} />
      <Main />
      <Footer />
      <Global />
    </>
  )
}
