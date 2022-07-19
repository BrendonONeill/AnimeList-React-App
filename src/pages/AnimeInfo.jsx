import Header from "../Components/Header"
import InfoCard from "../Components/InfoCard"
import {useState, useEffect, } from 'react'
import {useParams} from 'react-router-dom'
import Footer from "../Components/Footer"

function AnimeInfo( {AnimeSearch}) {

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
    <Header  AnimeSearch={AnimeSearch} />
    <main className='container'>
    <InfoCard item={cardInfo}  />
    </main>
    
    <Footer />
    </>
    
    
  )
}

export default AnimeInfo