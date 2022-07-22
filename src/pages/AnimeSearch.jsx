import CardList from "../Components/CardList"
import Header from "../Components/Header"
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import SubHeader from "../Components/SubHeader";


function AnimeSearch({cardSelect,searchBar, displaySearchBar, activeNav, openNav}) {

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
    <Header displaySearchBar={displaySearchBar} searchBar={searchBar} openNav={openNav}/>
    { searchBar ? <SubHeader /> : null}
    <div className="container">
    <CardList items={contents}  cardSelect={cardSelect}/>
    </div>
    </>
  )
}

export default AnimeSearch