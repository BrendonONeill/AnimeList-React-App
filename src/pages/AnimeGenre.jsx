import CardList from '../Components/CardList'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';

function AnimeGenre({genres, cardSelect, IncreasePage, DecreasePage, pagination}) {

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
    <Header />
    <main className='container'>
    <Navbar genres={genres} />
    <CardList  items={contents} cardSelect={cardSelect}/>
    </main>
    <div className='buttons-page'>
    <button onClick={() => DecreasePage(pagination)}>{pagination - 1}</button>
    <p>Page {pagination} </p>
    <button onClick={() =>IncreasePage(pagination)}>{pagination + 1}</button>
    </div>
    <Footer />
    </>
  )
}

export default AnimeGenre