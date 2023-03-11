// hook
import { useContext } from 'react'

// styles
import { LabelSkills, ListSkills } from '../../../../../styles/home/section_second'

// context
import DataContext from '../../../../../context/dataContext'

export default function ListLabel() {
  const dataContext = useContext(DataContext)
  return (
    <DataContext.Provider value={dataContext}>
      <ListSkills>
        {dataContext.skills.map((item, i) => (
          <LabelSkills key={i}>{item}</LabelSkills>
        ))}
      </ListSkills>
    </DataContext.Provider>
  )
}
