import Header from "../Components/Header"
import InfoCard from "../Components/InfoCard"
import {useState, useEffect, useContext } from 'react'
import { GlobalContext } from "../App"
import {useParams} from 'react-router-dom'
import SubHeader from "../Components/SubHeader";
import Navbar from '../Components/Navbar'


function AnimeInfo( {AnimeSearch}) {

  const { searchBar} = useContext(GlobalContext)

    const [cardInfo, setCardInfo] = useState([])
    const params = useParams();

    
  
    useEffect(() => {
      const test = async () =>
      {
      const details = await fetch(`https://api.jikan.moe/v4/anime/${params.id}/full`)
      .then(res => res.json())
      console.log(details.data)
      setCardInfo(details.data) 
      }
      test(params.id)
    },[params.id])

  return (
    <>
    <Header />
    { searchBar ? <SubHeader /> : null}
    <main className='container'>
    <Navbar />
    <InfoCard item={cardInfo}  />
    </main>
    
    
    </>
    
    
  )
}

export default AnimeInfo