// context
import { useContext } from 'react'
import ThemeContext from '../../context/themeContext'

// styles
import { SvgGeneral } from '../../styles/images/icons'

export default function IconGlobal() {
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
        <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
        <path d='M3.6 9l16.8 0'></path>
        <path d='M3.6 15l16.8 0'></path>
        <path d='M11.5 3a17 17 0 0 0 0 18'></path>
        <path d='M12.5 3a17 17 0 0 1 0 18'></path>
      </SvgGeneral>
    </ThemeContext.Provider>
  )
}
