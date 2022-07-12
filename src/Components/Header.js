import SearchBar from "./SearchBar"
import {Link} from 'react-router-dom'

function Header({ AnimeSearch, searchInput}) {
  return (

    <header className='header'>
      <h3>Logo</h3>
      <Link to={'/'}>
      <h1>Anime List</h1>
      </Link>
      <SearchBar />
    </header>
  )
}

export default Header