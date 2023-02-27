// components
import Footer from '../global/Footer'
import Global from '../global/Global'
import Navegator from '../global/Navegator'

// interface
import { HomeBlogProps } from '../../interface/props'
import Main from './blog/Main'
import { Outlet, useLocation } from 'react-router-dom'
export default function Blog({ handleChange }: HomeBlogProps) {
  const location = useLocation()
  return (
    <>
      <Navegator activeSection={4} handleChange={handleChange} />
      <Global />
  
      {location.pathname === '/blog' ? (
        <Main />
      ) : (
        <>
          <Outlet />
        </>
      )}
          <Footer />
    </>
  )
}
