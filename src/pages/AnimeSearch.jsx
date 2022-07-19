import CardList from "../Components/CardList"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';


function AnimeSearch({cardSelect}) {

    const [contents, setContents] = useState([]);
    const param = useParams();
    const searchedContent = async () =>
    {
      const newContent = await fetch(`https://api.jikan.moe/v4/anime?q=${param.name}&sfw`)
      .then(res => res.json())
      console.log(newContent.data)
      setContents(newContent.data)
    }
  
    
    
    useEffect(() => {
    searchedContent(param.name)
    },[param.name])
  return (
    <>
    <Header />
    <div className="main">
    <CardList items={contents}  cardSelect={cardSelect}/>
    </div>
    <Footer />
    </>
  )
}

export default AnimeSearch