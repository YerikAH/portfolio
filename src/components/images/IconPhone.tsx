// context
import { useContext } from 'react'
import ThemeContext from '../../context/themeContext'

// styles
import { SvgGeneral } from '../../styles/images/icons'

export default function IconPhone() {
  const themeContext = useContext(ThemeContext)
  return (
    <ThemeContext.Provider value={themeContext}>
      <SvgGeneral
        xmlns='http://www.w3.org/2000/svg'
        className={themeContext.theme}
        width='24'
        height='24'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='#212121'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
        <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2'></path>
        <path d='M15 7a2 2 0 0 1 2 2'></path>
        <path d='M15 3a6 6 0 0 1 6 6'></path>
      </SvgGeneral>
    </ThemeContext.Provider>
  )
}
