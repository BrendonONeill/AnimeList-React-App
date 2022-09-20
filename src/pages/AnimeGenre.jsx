import CardList from '../Components/CardList'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import SubHeader from '../Components/SubHeader'

import {useParams} from 'react-router-dom'
import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from "../App"

function AnimeGenre({ cardSelect}) {

    const {pagination, IncreasePage, DecreasePage, searchBar, navReset, items} = useContext(GlobalContext)
    const [contents, setContents] = useState([]);
    const param = useParams();
    
  
    useEffect(() => {
      const searchedContent = async () =>
      {
        const newContent = await fetch(`https://api.jikan.moe/v4/anime?genres=${param.genre}&page=${pagination}&sfw`)
        .then(res => res.json())
        console.log(newContent.data)
        console.log('api called')
        setContents(newContent.data)
      }
    searchedContent(param.genre)
    console.log("nav was reset")
    navReset()
    },[param.genre,pagination])

  return (
    <>
    <Header />
    { searchBar ? <SubHeader /> : null} 
    {
    // Need to look into more rendering not showing loading when items === 0  
    }
    {(items.length !== [])  
    ?<>
    <main className='container'>
    <Navbar />
    <div className='genre-info'>
      <h4 className='genre-info-text'>Sorted by Mal_Id due to API restrictions</h4>
    </div>
    <CardList  items={contents} cardSelect={cardSelect}/>
    </main>
    <div className='buttons-page'>
    <button onClick={() => DecreasePage(pagination)}>{pagination - 1}</button>
    <p>Page {pagination} </p>
    <button onClick={() =>IncreasePage(pagination)}>{pagination + 1}</button>
    </div>
    </>:
    <main className='container'>
    <h2 className='loading-data'>Loading...</h2>
    </main>
    }
    </>
  )
}

export default AnimeGenre