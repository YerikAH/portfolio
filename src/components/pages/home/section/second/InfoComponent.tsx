// hook
import { useContext } from 'react'

// styles
import * as style from '../../../../../styles/home/section_second'

// context
import FetchContext from '../../../../../context/dataContext'

export default function InfoComponent() {
  const dataContext = useContext(FetchContext)
  return (
    <style.BoxGrid>
      <style.BoxGridOne>
        <style.TextBodyOne>{dataContext.language_dynamic.description}</style.TextBodyOne>
      </style.BoxGridOne>
      <style.BoxGridTwo>
        <style.CircleAvatar src={dataContext.photo} alt='harvey photo' />
      </style.BoxGridTwo>
    </style.BoxGrid>
  )
}
