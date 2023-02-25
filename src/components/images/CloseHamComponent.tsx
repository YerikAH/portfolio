// hook
import { useContext } from 'react'

// context
import ThemeContext from '../../context/themeContext'

// styles
import { SvgHam } from '../../styles/images/ham'

export default function CloseHamComponent() {
  const themeContext = useContext(ThemeContext)
  return (
    <ThemeContext.Provider value={themeContext}>
      <SvgHam
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
        <path d='M18 6l-12 12'></path>
        <path d='M6 6l12 12'></path>
      </SvgHam>
    </ThemeContext.Provider>
  )
}
