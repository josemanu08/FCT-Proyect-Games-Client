/* eslint-disable react/prop-types */
import { createContext, useState, React } from 'react'

export const filterContext = createContext()
export const userDataContext = createContext()

export const Filter = ({ children }) => {
  const [filterState, setFilterState] = useState({
    rarity: 'all'
  })

  return (
    <filterContext.Provider value={{
      filterState,
      setFilterState
    }}>
        {children}
    </filterContext.Provider>
  )
}

// LyricPepper7852
// josemadrake
export const UserData = ({ children }) => {
  const [userData, setUserData] = useState({
    xboxUsername: 'LyricPepper7852'/* null */,
    playStationUsername: 'josemadrake'
  })

  return (
      <userDataContext.Provider value={{
        userData,
        setUserData
      }}>
        {children}
      </userDataContext.Provider>
  )
}
