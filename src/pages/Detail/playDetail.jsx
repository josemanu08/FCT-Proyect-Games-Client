import { React } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { useTrophies } from '../../hooks/detailHooks'
import { mapPlayImages, mapTitleInfo, mapCategories } from '../../helpers/helpers'

import { TitleInfo } from './components/TitleInfo'
import { TitleImages } from './components/TitleImages'
import { Header } from './components/Header'
import { Categories } from './components/Categories'
import { TrophyTable } from './components/TrophyTable'

export const PlayDetail = () => {
  const params = useParams()
  const { trophyData, isLoading } = useTrophies(params)
  return (
    <>
    {
    trophyData && !isLoading
      ? <div className='detailBody bodyPlayStation'
      style={{ backgroundImage: `url("${trophyData.gi.background_image_additional}")` }}>
          <Header>
            <TitleImages
            info={
              mapPlayImages(trophyData.gi.background_image, trophyData.gi.screen_shots)}
            />
            <TitleInfo info={mapTitleInfo(trophyData.gi)}></TitleInfo>
            <Categories
            className={'playStationCategories'}
            info={mapCategories(trophyData.gi.genres)}
            />
          </Header>
          {/* <GameCharItemLoc info={trophyData.additional}/> */}
          <TrophyTable info={trophyData.ti}></TrophyTable>
          <NavLink className='goBack goBackPlayStation' to='/'>
            <i className='bx bxs-left-arrow'/>
          </NavLink>
        </div>
      : 'Loading...'// (<div className="lds-ripple"><div></div></div>)
      }
    </>
  )
}
