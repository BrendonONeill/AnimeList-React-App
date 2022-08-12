import Header from "../Components/Header"
import InfoCard from "../Components/InfoCard"
import {useState, useEffect, } from 'react'
import {useParams} from 'react-router-dom'
import SubHeader from "../Components/SubHeader";
import Navbar from '../Components/Navbar'


function AnimeInfo( {AnimeSearch,searchBar, displaySearchBar, activeNav, openNav, genres, navReset}) {

    const [cardInfo, setCardInfo] = useState([])
    const params = useParams();

    const test = async () =>
    {
      const details = await fetch(`https://api.jikan.moe/v4/anime/${params.id}/full`)
      .then(res => res.json())
      console.log(details.data)
      setCardInfo(details.data) 
    }
  
    useEffect(() => {
      test(params.id)
    },[params.id])

  return (
    <>
    <Header  AnimeSearch={AnimeSearch} displaySearchBar={displaySearchBar} searchBar={searchBar} openNav={openNav}/>
    { searchBar ? <SubHeader /> : null}
    <main className='container'>
    <Navbar activeNav={activeNav} genres={genres} navReset={navReset}  />
    <InfoCard item={cardInfo}  />
    </main>
    
    
    </>
    
    
  )
}

export default AnimeInfo