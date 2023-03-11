import Navegator from '../global/Navegator'
import Footer from '../global/Footer'
import Global from '../global/Global'
import Main from './project/Main'

export default function ProjectPage() {
  return (
    <>
      <Navegator activeSection={0} />
      <Main />
      <Footer />
      <Global />
    </>
  )
}
