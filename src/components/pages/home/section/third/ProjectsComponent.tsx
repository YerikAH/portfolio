import { PortfolioProps } from '../../../../../interface/props'
import * as style from '../../../../../styles/home/section_third'
/* images */
import { useContext } from 'react'
// components
import GithubComponent from '../../../../images/GithubComponent'
import InfoComponent from '../../../../images/InfoComponent'
import LinkComponent from '../../../../images/LinkComponent'

// context
import DataContext from '../../../../../context/dataContext'

export default function ProjectsComponent({ data }: PortfolioProps) {
  const dataContext = useContext(DataContext)
  return (
    <DataContext.Provider value={dataContext}>
      <style.ProjectStyle tabIndex={1}>
        <style.HoverBox className='hoverBox'></style.HoverBox>
        <style.LinkImage href={data.link_preview} target='_blank' className='linkImage'>
          <style.AssetImage src={data.image_path} />
        </style.LinkImage>
        <style.BoxInfo>
          <style.TitleProject>{data.name}</style.TitleProject>
          <style.TextProject>{data.description.substring(0, 300)}...</style.TextProject>
        </style.BoxInfo>
        <style.BoxButtons>
          <style.TextButton href={data.link_preview} target='_blank' tabIndex={1}>
            <LinkComponent />
            {dataContext.language_static.section_third.preview}
          </style.TextButton>
          <style.TextButton href={data.link_code} target='_blank' tabIndex={1}>
            <GithubComponent />
            {dataContext.language_static.section_third.code}
          </style.TextButton>
          <style.TextButton href='' tabIndex={1}>
            <InfoComponent />
            {dataContext.language_static.section_third.info}
          </style.TextButton>
        </style.BoxButtons>
      </style.ProjectStyle>
    </DataContext.Provider>
  )
}
