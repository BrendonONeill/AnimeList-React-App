import CardList from "../Components/CardList"
import Header from "../Components/Header"
import {useParams} from 'react-router-dom'
import { useEffect, useState, useContext } from 'react';
import SubHeader from "../Components/SubHeader";
import { GlobalContext } from "../App"
import Navbar from "../Components/Navbar";


function AnimeSearch({cardSelect}) {

    const {searchBar, navReset, paginationReset} = useContext(GlobalContext)
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
    console.log("nav was reset")
    navReset()
    },[param.name])

    useEffect(() => {
      paginationReset()
    },[])
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