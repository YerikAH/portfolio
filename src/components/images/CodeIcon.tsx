import { useContext } from 'react'
import ThemeContext from '../../context/themeContext'
import { SvgGeneral } from '../../styles/images/icons'

export default function CodeIcon() {
  const themeContext = useContext(ThemeContext)
  return (
    <ThemeContext.Provider value={themeContext}>
      <SvgGeneral
        xmlns='http://www.w3.org/2000/svg'
        className={themeContext.theme}
        width='100'
        height='100'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
        <path d='M15 12h.01'></path>
        <path d='M12 12h.01'></path>
        <path d='M9 12h.01'></path>
        <path d='M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2'></path>
        <path d='M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2'></path>
      </SvgGeneral>
    </ThemeContext.Provider>
  )
}
