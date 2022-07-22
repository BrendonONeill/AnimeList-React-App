import CardList from '../Components/CardList'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import SubHeader from '../Components/SubHeader'

import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';

function AnimeGenre({genres, cardSelect, IncreasePage, DecreasePage, pagination,searchBar, displaySearchBar, activeNav, openNav, navReset}) {

    const [contents, setContents] = useState([]);
    const param = useParams();
    const searchedContent = async () =>
    {
      const newContent = await fetch(`https://api.jikan.moe/v4/anime?order=4&sort=ascending&genres=${param.genre}&page=${pagination}&sfw`)
      .then(res => res.json())
      console.log(newContent.data)
      console.log('api called')
      setContents(newContent.data)
    }
  
    
    
    useEffect(() => {

    searchedContent(param.genre)
    },[param.genre,pagination])

  return (
    <>
    <Header displaySearchBar={displaySearchBar} searchBar={searchBar} openNav={openNav}/>
    { searchBar ? <SubHeader /> : null}
    <main className='container'>
    <Navbar activeNav={activeNav} genres={genres} navReset={navReset} />
    <CardList  items={contents} cardSelect={cardSelect}/>
    </main>
    <div className='buttons-page'>
    <button onClick={() => DecreasePage(pagination)}>{pagination - 1}</button>
    <p>Page {pagination} </p>
    <button onClick={() =>IncreasePage(pagination)}>{pagination + 1}</button>
    </div>
   
    </>
  )
}

export default AnimeGenre