import CardList from "../Components/CardList"
import Header from "../Components/Header"
import {useParams} from 'react-router-dom'
import { useEffect, useState, useContext } from 'react';
import SubHeader from "../Components/SubHeader";
import { GlobalContext } from "../App"
import Navbar from "../Components/Navbar";


function AnimeSearch({cardSelect}) {

    const { searchBar} = useContext(GlobalContext)
    const [contents, setContents] = useState([]);
    const param = useParams();
    
  
    useEffect(() => {
    const searchedContent = async () =>
    {
      const newContent = await fetch(`https://api.jikan.moe/v4/anime?q=${param.name}&sfw`)
      .then(res => res.json())
      console.log(newContent.data)
      setContents(newContent.data)
    }
    searchedContent(param.name)
    },[param.name])
    return (
    <>
    <Header />
    { searchBar ? <SubHeader /> : null}
    <div className="container">
    <Navbar />
    <CardList items={contents}  cardSelect={cardSelect}/>
    </div>
    </>
  )
}

export default AnimeSearch