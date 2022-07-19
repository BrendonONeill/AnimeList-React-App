import Main from "./Main"
import { Route, Routes} from 'react-router-dom'
import AnimeInfo from "./AnimeInfo"
import {useNavigate} from 'react-router-dom'
import AnimeSearch from "./AnimeSearch";
import AnimeGenre from "./AnimeGenre";



function Pages({pagination, genres, items, IncreasePage, DecreasePage}) {

    const navigate = useNavigate();
    
    const cardSelect = (id) =>
  {
    navigate('/'+id)
    console.log(id)
  }

 

  



  return (
    <>
    <Routes>
        <Route path="/" element={<Main genres={genres}  items={items} cardSelect={cardSelect} IncreasePage={IncreasePage} DecreasePage={DecreasePage} pagination={pagination} />}/>
        <Route path="/:id" element={<AnimeInfo/>}/>
        <Route path="/search/:name" element={<AnimeSearch cardSelect={cardSelect} />}/>
        <Route path="/genres/:genre" element={<AnimeGenre genres={genres} cardSelect={cardSelect} IncreasePage={IncreasePage} DecreasePage={DecreasePage} pagination={pagination}/>} />
    </Routes>
    </>
  )
}

export default Pages