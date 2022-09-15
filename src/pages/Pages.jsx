import Main from "./Main"
import { Route, Routes} from 'react-router-dom'
import AnimeInfo from "./AnimeInfo"
import {useNavigate} from 'react-router-dom'
import AnimeSearch from "./AnimeSearch";
import AnimeGenre from "./AnimeGenre";


function Pages() {
  const navigate = useNavigate();
  const cardSelect = (id) => navigate('/'+id);

  return (
    <>
    <Routes>
        <Route path="/" element={<Main cardSelect={cardSelect} />}/>
        <Route path="/:id" element={<AnimeInfo />}/>
        <Route path="/search/:name" element={<AnimeSearch cardSelect={cardSelect} />}/>
        <Route path="/genres/:genre" element={<AnimeGenre cardSelect={cardSelect} />} />
    </Routes>
    </>
  )
}

export default Pages