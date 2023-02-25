// components
import Footer from '../global/Footer'
import Global from '../global/Global'
import Navegator from '../global/Navegator'

// interface
import { HomeBlogProps } from '../../interface/props'
import Main from './blog/Main'

export default function Blog({ handleChange }: HomeBlogProps) {
  return (
    <>
      <Navegator activeSection={4} handleChange={handleChange} />
      <Main />
      <Footer />
      <Global />
    </>
  )
}
