import SearchBar from "./SearchBar"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Header({displaySearchBar, searchBar,openNav, navReset}) {
  return (

    <header className='header'>
      <a >
        <span className="burger"></span>
        <span onClick={openNav} className="burger"></span>
        <span className="burger"></span>
      </a>
      
      <Link onClick={navReset} to={'/'}>
      <h1 className="app-name">Anime List</h1>
      </Link>
      <a className="buttonHeader" onClick={displaySearchBar}><FontAwesomeIcon icon={faSearch} /> </a>
     
      
      
    </header>
  )
}

export default Header