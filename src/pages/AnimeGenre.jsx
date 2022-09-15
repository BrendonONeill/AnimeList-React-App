import CardList from '../Components/CardList'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import SubHeader from '../Components/SubHeader'

import {useParams} from 'react-router-dom'
import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from "../App"

function AnimeGenre({ cardSelect}) {

    const {pagination, IncreasePage, DecreasePage, searchBar} = useContext(GlobalContext)
    const [contents, setContents] = useState([]);
    const param = useParams();
    
  
    useEffect(() => {
      const searchedContent = async () =>
      {
        const newContent = await fetch(`https://api.jikan.moe/v4/anime?order_by=score&sort=ascending&genres=${param.genre}&page=${pagination}&sfw`)
        .then(res => res.json())
        console.log(newContent.data)
        console.log('api called')
        setContents(newContent.data)
      }
    searchedContent(param.genre)
    },[param.genre,pagination])

  return (
    <>
    <Header />
    { searchBar ? <SubHeader /> : null}
    <main className='container'>
    <Navbar />
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