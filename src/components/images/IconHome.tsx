// context
import { useContext } from 'react'
import ThemeContext from '../../context/themeContext'

// styles
import { SvgGeneral } from '../../styles/images/icons'

export default function IconHome() {
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
        <path d='M5 12l-2 0l9 -9l9 9l-2 0'></path>
        <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7'></path>
        <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6'></path>
      </SvgGeneral>
    </ThemeContext.Provider>
  )
}
