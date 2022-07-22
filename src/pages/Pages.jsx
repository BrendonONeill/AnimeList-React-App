import Main from "./Main"
import { Route, Routes} from 'react-router-dom'
import AnimeInfo from "./AnimeInfo"
import {useNavigate} from 'react-router-dom'
import AnimeSearch from "./AnimeSearch";
import AnimeGenre from "./AnimeGenre";
import { useState } from "react";


function Pages({pagination, genres, items, IncreasePage, DecreasePage}) {

    const navigate = useNavigate();
    
    const [activeNav, setActiveNav] = useState(false)
    const [searchBar, setSearchBar] = useState(false)
    
    const cardSelect = (id) =>
  {
    
    navigate('/'+id)
    console.log(id)
  }

  const openNav = () =>
  {
    if(searchBar === true)
    {
      setSearchBar(!searchBar)
    }
    console.log('burger clicked')
    setActiveNav(!activeNav)
  }

  const displaySearchBar = () =>
  {
    if(activeNav === true)
    {
      setActiveNav(!activeNav)
    }
      setSearchBar(!searchBar) 
  }
  const navReset = () => 
  {
   setActiveNav(!activeNav) 
  }

 

  return (
    <>
    <Routes>
        <Route path="/" element={<Main genres={genres}  items={items} cardSelect={cardSelect} IncreasePage={IncreasePage} DecreasePage={DecreasePage} pagination={pagination} searchBar={searchBar} displaySearchBar={displaySearchBar} activeNav={activeNav} openNav={openNav} navReset={navReset}/>}/>
        <Route path="/:id" element={<AnimeInfo/>}/>
        <Route path="/search/:name" element={<AnimeSearch cardSelect={cardSelect} searchBar={searchBar} displaySearchBar={displaySearchBar} activeNav={activeNav} openNav={openNav}/>}/>
        <Route path="/genres/:genre" element={<AnimeGenre genres={genres} cardSelect={cardSelect} IncreasePage={IncreasePage} DecreasePage={DecreasePage} pagination={pagination} searchBar={searchBar} displaySearchBar={displaySearchBar} activeNav={activeNav} openNav={openNav} navReset={navReset}/>} />
    </Routes>
    </>
  )
}

export default Pages